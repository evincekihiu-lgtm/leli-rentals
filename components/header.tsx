"use client"

import { Search, Moon, Sun, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-7xl">
        <Link href="/" className="flex items-center">
          <Image
            src={theme === "dark" ? "/logo-white.jpg" : "/logo-black.svg"}
            alt="Leli Rentals"
            width={160}
            height={48}
            className="h-12 w-auto transition-all duration-200"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search Rentals"
              className="pl-10 w-64 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="text-gray-700 hover:text-orange-500 transition-colors">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white transition-all rounded-lg">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-orange-500 transition-colors">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer">
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/bookings" className="cursor-pointer">
                  My Bookings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/listings" className="cursor-pointer">
                  My Listings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/favorites" className="cursor-pointer">
                  Favorites
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile/settings" className="cursor-pointer">
                  Account Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/billing" className="cursor-pointer">
                  Billing & Payments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/help" className="cursor-pointer">
                  Help & Support
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
