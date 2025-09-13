import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/rental-hero-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">Find Your Perfect Rental</h1>

          <p className="text-xl md:text-2xl mb-12 text-pretty max-w-2xl mx-auto leading-relaxed">
            Discover amazing rentals for every occasion.
            <br />
            From cars to equipment, we've got you covered.
          </p>

          <div className="bg-white rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="What are you looking for?"
                  className="pl-12 h-14 text-lg border-0 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-14 text-lg font-semibold rounded-xl min-w-[120px]">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Leli Rentals?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of rentals with our modern platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Search</h3>
                <p className="text-gray-600">
                  Find exactly what you need with our powerful search and filtering system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Listings</h3>
                <p className="text-gray-600">
                  All our rentals are verified and quality-checked for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Booking</h3>
                <p className="text-gray-600">Book instantly with our streamlined reservation system.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our most popular rental categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Vehicles",
                count: "1,800+ listings",
                href: "/listings/vehicles",
                image: "/luxury-car-rental.png",
              },
              {
                name: "Equipment",
                count: "3,200+ listings",
                href: "/listings/equipment",
                image: "/professional-equipment-rental.jpg",
              },
              {
                name: "Homes & Apartments",
                count: "2,500+ listings",
                href: "/listings/homes",
                image: "/modern-apartment-rental.jpg",
              },
              {
                name: "Event Spaces",
                count: "850+ listings",
                href: "/listings/events",
                image: "/event-venue-rental.jpg",
              },
              {
                name: "Electronics",
                count: "950+ listings",
                href: "/listings/tech",
                image: "/electronics-rental.jpg",
              },
              {
                name: "Fashion",
                count: "1,200+ listings",
                href: "/listings/fashion",
                image: "/designer-fashion-rental.jpg",
              },
            ].map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
