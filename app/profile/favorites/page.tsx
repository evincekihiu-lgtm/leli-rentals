"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowLeft, DollarSign, Star, MapPin, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Mock favorites data
const mockFavorites = [
  {
    id: "fav-1",
    title: "Luxury Sports Car",
    description: "Experience the thrill of driving a high-performance sports car",
    price: 150,
    category: "vehicles",
    image: "/luxury-car-rental.png",
    rating: 4.9,
    reviews: 127,
    location: "Los Angeles, CA",
    owner: "Premium Rentals",
  },
  {
    id: "fav-2",
    title: "Modern Apartment Downtown",
    description: "Stylish apartment in the heart of the city with amazing views",
    price: 120,
    category: "homes",
    image: "/modern-apartment-rental.jpg",
    rating: 4.8,
    reviews: 89,
    location: "New York, NY",
    owner: "City Living Co.",
  },
  {
    id: "fav-3",
    title: "Professional Camera Equipment",
    description: "High-end camera gear for professional photography projects",
    price: 45,
    category: "equipment",
    image: "/professional-equipment-rental.jpg",
    rating: 4.9,
    reviews: 156,
    location: "San Francisco, CA",
    owner: "Photo Pro Rentals",
  },
  {
    id: "fav-4",
    title: "Designer Evening Gown",
    description: "Elegant designer dress perfect for special occasions",
    price: 80,
    category: "fashion",
    image: "/designer-fashion-rental.jpg",
    rating: 4.7,
    reviews: 203,
    location: "Miami, FL",
    owner: "Luxury Fashion",
  },
]

export default function FavoritesPage() {
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
          <h1 className="text-3xl font-bold text-foreground">My Favorites</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search favorites..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFavorites.map((item) => (
            <Card key={item.id} className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 h-8 w-8 bg-white/90 hover:bg-white"
                >
                  <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                </Button>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold line-clamp-1">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.owner}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{item.rating}</span>
                  <span className="text-muted-foreground text-sm">({item.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-1 mb-4 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold">${item.price}</span>
                    <span className="text-muted-foreground text-sm">/day</span>
                  </div>
                  <Link href={`/items/${item.id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {mockFavorites.length === 0 && (
          <Card className="border-2 border-dashed">
            <CardContent className="p-12 text-center">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No favorites yet</h3>
              <p className="text-muted-foreground mb-4">Start exploring and save items you love!</p>
              <Link href="/">
                <Button>
                  <Heart className="h-4 w-4 mr-2" />
                  Browse Rentals
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
