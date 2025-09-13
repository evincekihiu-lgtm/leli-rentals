"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest rental deals, new listings, and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1 h-12 rounded-xl bg-background border-border" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 rounded-xl font-semibold">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src={theme === "dark" ? "/logo-white.svg" : "/logo-black.svg"}
                  alt="Leli Rentals"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
                The premier destination for all your rental needs. From homes to vehicles, equipment to event spaces -
                we've got you covered.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Categories</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/listings/homes" className="text-muted-foreground hover:text-primary transition-colors">
                    Homes & Apartments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/listings/vehicles"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Vehicles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/listings/equipment"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/listings/events" className="text-muted-foreground hover:text-primary transition-colors">
                    Event Spaces
                  </Link>
                </li>
                <li>
                  <Link href="/listings/fashion" className="text-muted-foreground hover:text-primary transition-colors">
                    Fashion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    123 Rental Street
                    <br />
                    Nairobi, Kenya 00100
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+254 700 123 456</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">info@lelirentals.co.ke</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">© 2025 Leli Rentals. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
