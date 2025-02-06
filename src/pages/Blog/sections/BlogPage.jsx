'use client'

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon, UserIcon, TagIcon } from "lucide-react"
import Hero from "@/pages/Blog/sections/Hero";
import CallToActionSection from "@/components/CallToActionSection"
import ScrollOnSideSection from "@/components/ScrollOnSideSection";

export default function BlogGrid() {
  const [posts, setPosts] = useState([])
  const [recentPosts, setRecentPosts] = useState([])
  const [relatedPosts, setRelatedPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const postsPerPage = 6

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [postsRes, recentRes, categoriesRes, relatedRes] = await Promise.all([
          axios.get(
            `https://globeflight.co.ke/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=${postsPerPage}&search=${searchTerm}`
          ),
          axios.get('https://globeflight.co.ke/wp-json/wp/v2/posts?_embed&per_page=5'),
          axios.get('https://globeflight.co.ke/wp-json/wp/v2/categories'),
          axios.get('https://globeflight.co.ke/wp-json/wp/v2/posts?_embed&per_page=3')
        ])

        setPosts(postsRes.data)
        setRecentPosts(recentRes.data)
        setCategories(categoriesRes.data)
        setRelatedPosts(relatedRes.data)
        setTotalPages(Math.min(8, parseInt(postsRes.headers['x-wp-totalpages'], 10)))
      } catch (err) {
        setError("Failed to load blog content")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage, searchTerm])

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
  }

  const truncateText = (text, maxLength) => {
    const strippedText = text.replace(/<\/?[^>]+(>|$)/g, "")
    return strippedText.length > maxLength ? strippedText.slice(0, maxLength) + "..." : strippedText
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-4">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-green-800">Latest News & Insights</h1>

        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="search"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow shadow-sm"
            />
            <Button type="submit" variant="default" className="bg-green-600 hover:bg-green-700">
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </form>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="relative w-full h-48 sm:h-40 md:h-48">
                    {post._embedded?.['wp:featuredmedia'] && (
                      <img
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    )}
                    <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-xs font-semibold">
                      {post._embedded['wp:term'][0][0]?.name || 'Uncategorized'}
                    </div>
                  </div>
                  <CardContent className="p-4 flex-grow">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UserIcon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{post._embedded?.author[0]?.name}</span>
                      </div>
                    </div>
                    <h2
                      className="text-xl font-semibold mb-2 line-clamp-2 text-green-800"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div
                      className="text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: truncateText(post.excerpt.rendered, 100) }}
                    />
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blog/${post.slug}`} className="w-full">
                      <Button variant="default" className="w-full bg-green-600 hover:bg-green-700">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-12">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="text-green-700 border-green-300 hover:bg-green-50"
              >
                <ChevronLeftIcon className="h-4 w-4 mr-2" />
                Previous
              </Button>
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                  className={currentPage === i + 1 ? "bg-green-600 hover:bg-green-700" : "text-green-700 border-green-300 hover:bg-green-50"}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="text-green-700 border-green-300 hover:bg-green-50"
              >
                Next
                <ChevronRightIcon className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <h3 className="text-xl font-semibold">Recent Posts</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 divide-y divide-gray-200">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="pt-4 first:pt-0">
                      <Link to={`/blog/${post.slug}`} className="hover:text-green-600 transition-colors block">
                        <h4 className="font-medium line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <h3 className="text-xl font-semibold">Categories</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id} className="flex items-center">
                      <TagIcon className="h-4 w-4 mr-2 text-green-500" />
                      <Link to={`/category/${category.slug}`} className="hover:text-green-600 transition-colors">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-green-800 text-center">Related Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                <div className="relative w-full h-48 sm:h-40 md:h-48">
                  {post._embedded?.['wp:featuredmedia'] && (
                    <img
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <CardContent className="p-4 flex-grow">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{post._embedded?.author[0]?.name}</span>
                    </div>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2 line-clamp-2 text-green-800"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: truncateText(post.excerpt.rendered, 80) }}
                  />
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.slug}`} className="w-full">
                    <Button variant="default" className="w-full bg-green-600 hover:bg-green-700">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <CallToActionSection />
        <ScrollOnSideSection />
      </div>
    </div>
  )
}