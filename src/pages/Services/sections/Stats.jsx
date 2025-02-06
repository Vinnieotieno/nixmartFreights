'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stats } from '@/constants/servicepage'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowRight, Info } from 'lucide-react'

const StatItem = ({ stat, onInfoClick }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(stat.number.replace(/,/g, ''))
    const duration = 2000
    let timer = setInterval(() => {
      start += end / (duration / 16)
      setCount(Math.floor(start))
      if (start >= end) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [stat.number])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
        {count.toLocaleString()}
      </div>
      <div className="text-lg font-medium text-gray-700 text-center mb-2">{stat.text}</div>
      {stat.icon && <stat.icon className="w-8 h-8 text-gray-500" />}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" className="mt-2" onClick={() => onInfoClick(stat)}>
              <Info className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click for more information</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  )
}

const Stats = () => {
  const [currentStats, setCurrentStats] = useState(stats.slice(0, 4))
  const [key, setKey] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedStat, setSelectedStat] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats(prevStats => {
        const newStats = [...stats]
        const first = newStats.shift()
        newStats.push(first)
        return newStats.slice(0, 4)
      })
      setKey(prevKey => prevKey + 1)
      setProgress(0)
    }, 20000) // 20 seconds

    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          return 0
        }
        return prevProgress + 0.5 // Increase by 0.5% every 100ms
      })
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  const handleInfoClick = (stat) => {
    setSelectedStat(stat)
    setIsDialogOpen(true)
  }

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {currentStats.map((stat, idx) => (
              <StatItem key={`${stat.number}-${key}-${idx}`} stat={stat} onInfoClick={handleInfoClick} />
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-8">
          <Progress value={progress} className="w-full" />
        </div>
        <div className="mt-8 text-center">
          <Button onClick={() => setIsDialogOpen(true)}>
            View All Stats <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedStat ? selectedStat.text : 'All Statistics'}</DialogTitle>
              <DialogDescription>
                {selectedStat ? (
                  <p>{selectedStat.description || 'No additional information available.'}</p>
                ) : (
                  <div className="grid gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-center">
                        <div className="font-bold mr-2">{stat.number}</div>
                        <div>{stat.text}</div>
                      </div>
                    ))}
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Stats