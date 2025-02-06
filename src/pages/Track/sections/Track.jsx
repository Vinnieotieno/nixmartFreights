'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Clock, Package2, Truck, MapPin } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingData, setTrackingData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const stages = [
    'Created',
    'Collected',
    'Departed',
    'In Transit',
    'Arrived at Destination',
    'Out for Delivery',
    'Delivered',
  ]

  const handleTrack = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://globeflight.co.ke/wp-json/wpcargo/v1/track?consignment_number=${trackingNumber}`)
      if (!response.ok) {
        throw new Error('Failed to fetch tracking data')
      }
      const data = await response.json()
      if (data && data.length > 0) {
        setTrackingData(data[0])
      } else {
        throw new Error('No tracking data found')
      }
    } catch (err) {
      console.error('Error fetching tracking information:', err)
      setError('You have entered a wrong tracking information. Please check your consignment number.')
    } finally {
      setLoading(false)
    }
  }

  const getProgress = () => {
    if (!trackingData) return 0
    const currentStage = stages.findIndex(stage => stage.toLowerCase() === trackingData.status.toLowerCase())
    return ((currentStage + 1) / stages.length) * 100
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
      
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-full max-w-2xl space-y-8 relative z-10">
          <div className="text-center space-y-4 mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Track Your Shipment
            </h1>
            <div className="flex justify-center items-center gap-2 text-white">
              <Clock className="h-6 w-6 animate-pulse" />
              <span className="font-medium text-lg md:text-xl">We're Here for You 24/7!</span>
            </div>
          </div>

          <Card className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden transform transition-all hover:scale-105">
            <CardContent className="p-6">
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Input
                  type="text"
                  placeholder="Enter consignment number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  required
                  className="flex-grow text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-green-500"
                />
                <Button 
                  type="submit" 
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" 
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Tracking...
                    </span>
                  ) : (
                    'Track Now'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {error && (
            <Alert variant="destructive" className="max-w-3xl mx-auto animate-fadeIn">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {trackingData && (
            <Card className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden mt-6 animate-fadeIn">
              <CardHeader className="bg-green-500 text-white">
                <CardTitle className="text-2xl font-bold text-center">Tracking Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Package2 className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Consignment Number</p>
                      <p className="font-semibold">{trackingData.shipment_number}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-semibold">{trackingData.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Origin</p>
                      <p className="font-semibold">{trackingData.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Destination</p>
                      <p className="font-semibold">{trackingData.destination}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                      <div
                        style={{ width: `${getProgress()}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500 ease-in-out"
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {stages.map((stage, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-center ${
                          trackingData.status.toLowerCase() === stage.toLowerCase() ? 'text-green-500' : 'text-gray-400'
                        }`}
                      >
                        <Package2 className={`h-6 w-6 mb-2 ${
                          trackingData.status.toLowerCase() === stage.toLowerCase() ? 'text-green-500' : 'text-gray-400'
                        }`} />
                        <span className="text-xs text-center hidden sm:block">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}