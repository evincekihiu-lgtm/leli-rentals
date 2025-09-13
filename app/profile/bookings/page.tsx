"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, ArrowLeft, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Mock user bookings data
const mockBookings = [
  {
    id: "booking-1",
    listingTitle: "Tesla Model 3",
    listingImage: "/luxury-car-rental.png",
    owner: "David Kim",
    dates: "Dec 15-18, 2024",
    totalPrice: 340,
    status: "confirmed",
    category: "vehicles",
    location: "San Francisco, CA",
  },
  {
    id: "booking-2",
    listingTitle: "Modern Downtown Apartment",
    listingImage: "/modern-apartment-rental.jpg",
    owner: "Sarah Johnson",
    dates: "Nov 20-25, 2024",
    totalPrice: 720,
    status: "completed",
    category: "homes",
    location: "New York, NY",
  },
  {
    id: "booking-3",
    listingTitle: "Professional Camera Kit",
    listingImage: "/professional-equipment-rental.jpg",
    owner: "Alex Rivera",
    dates: "Jan 10-12, 2025",
    totalPrice: 135,
    status: "pending",
    category: "equipment",
    location: "Los Angeles, CA",
  },
  {
    id: "booking-4",
    listingTitle: "Mountain Bike",
    listingImage: "/mountain-bike-trail.png",
    owner: "Mike Chen",
    dates: "Oct 5-7, 2024",
    totalPrice: 75,
    status: "completed",
    category: "sports",
    location: "Denver, CO",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-blue-100 text-blue-800"
    case "completed":
      return "bg-green-100 text-green-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/profile">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search bookings..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {mockBookings.map((booking) => (
            <Card key={booking.id} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 overflow-hidden rounded-lg">
                    <img
                      src={booking.listingImage || "/placeholder.svg"}
                      alt={booking.listingTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{booking.listingTitle}</h3>
                        <p className="text-muted-foreground mb-3">Hosted by {booking.owner}</p>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {booking.dates}
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />${booking.totalPrice} total
                          </div>
                          <div className="text-muted-foreground">{booking.location}</div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>

                        <div className="flex gap-2">
                          <Link href={`/items/${booking.id.replace("booking-", "")}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          {booking.status === "completed" && <Button size="sm">Leave Review</Button>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {mockBookings.length === 0 && (
          <Card className="border-2 border-dashed">
            <CardContent className="p-12 text-center">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No bookings yet</h3>
              <p className="text-muted-foreground mb-4">Start exploring and book your first rental!</p>
              <Link href="/">
                <Button>Browse Rentals</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
