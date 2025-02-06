'use client'

import React, { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Hero from "@/pages/Blog/sections/Hero";
import CallToActionSection from "@/components/CallToActionSection"
import LearnMore from "@/pages/Blog/sections/LearnMore";
import ScrollOnSideSection from "@/components/ScrollOnSideSection";
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, ClockIcon, TagIcon, ThumbsUp, ChevronLeft, ChevronRight, Share2 } from "lucide-react"

export default function BlogDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [previousPost, setPreviousPost] = useState(null)
  const [nextPost, setNextPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const calculateReadingTime = (content) => {
    const words = content.replace(/<\/?[^>]+(>|$)/g, "").split(" ").length
    return Math.ceil(words / 200)
  }

  useEffect(() => {
    const fetchPostData = async () => {
      setLoading(true)
      try {
        const postRes = await axios.get(`https://globeflight.co.ke/wp-json/wp/v2/posts?slug=${slug}&_embed`)
        if (postRes.data.length > 0) {
          const fetchedPost = postRes.data[0]
          setPost(fetchedPost)

          const [prevRes, nextRes, relatedRes] = await Promise.all([
            axios.get(`https://globeflight.co.ke/wp-json/wp/v2/posts?per_page=1&order=desc&before=${fetchedPost.date}`),
            axios.get(`https://globeflight.co.ke/wp-json/wp/v2/posts?per_page=1&order=asc&after=${fetchedPost.date}`),
            axios.get(`https://globeflight.co.ke/wp-json/wp/v2/posts?categories=${fetchedPost.categories[0]}&_embed&per_page=3`)
          ])

          setPreviousPost(prevRes.data[0] || null)
          setNextPost(nextRes.data[0] || null)
          setRelatedPosts(relatedRes.data.filter((p) => p.id !== fetchedPost.id))
          setLikeCount(Math.floor(Math.random() * 100))
        } else {
          setError("Post not found.")
        }
      } catch (err) {
        setError("Failed to load post content.")
      } finally {
        setLoading(false)
      }
    }

    fetchPostData()
  }, [slug])

  const handleLike = () => {
    setLikeCount((prev) => prev + (liked ? -1 : 1))
    setLiked(!liked)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Skeleton className="h-12 w-1/2 mb-4" />
        <Skeleton className="h-64 w-full mb-6" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    )
  }

  if (error) return <div className="text-red-500 text-center py-8">{error}</div>

  const readingTime = calculateReadingTime(post.content.rendered)
  const publishDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const postUrl = window.location.href

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Hero />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="outline" onClick={() => navigate('/blog')} className="mb-8">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>

        <article className="bg-white rounded-lg shadow-xl p-8 mb-12">
          {post._embedded['wp:featuredmedia'] && (
            <img
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              className="w-full h-64 object-cover rounded-lg mb-8 shadow-md"
            />
          )}

          <h1 className="text-4xl font-bold mb-6 text-green-800" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <span className="flex items-center">
              <TagIcon className="h-4 w-4 mr-1" />
              {post._embedded['wp:term'][0][0].name}
            </span>
            <span className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {publishDate}
            </span>
            <span className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              {readingTime} min read
            </span>
          </div>

          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
            <Button
              variant={liked ? "default" : "outline"}
              onClick={handleLike}
              className={`flex items-center gap-2 ${liked ? 'bg-green-500 text-white' : 'text-green-500'}`}
            >
              <ThumbsUp className="h-4 w-4" />
              {liked ? "Liked" : "Like"} ({likeCount})
            </Button>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">Share:</span>
              {['WhatsApp', 'Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href={`#share-${platform.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share on {platform}</span>
                </a>
              ))}
            </div>
          </div>
        </article>

        <nav className="flex justify-between mb-12">
          {previousPost && (
            <Link
              to={`/blog/${previousPost.slug}`}
              className="flex items-center text-green-500 hover:text-green-600 transition-colors"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              <span className="text-sm font-medium">Previous Post</span>
            </Link>
          )}
          {nextPost && (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="flex items-center text-green-500 hover:text-green-600 transition-colors ml-auto"
            >
              <span className="text-sm font-medium">Next Post</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </nav>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Related Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/blog/${relatedPost.slug}`}>
                  {relatedPost._embedded['wp:featuredmedia'] && (
                    <img
                      src={relatedPost._embedded['wp:featuredmedia'][0].source_url}
                      alt={relatedPost.title.rendered}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 text-green-700" dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }} />
                    <p className="text-sm text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: relatedPost.excerpt.rendered }} />
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

       
      </div>
      <LearnMore />
        <CallToActionSection />
        <ScrollOnSideSection />
    </div>
  )
}