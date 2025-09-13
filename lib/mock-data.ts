// Centralized mock data for the application
export interface Listing {
  id: string
  title: string
  description: string
  price: number
  location: string
  rating: number
  reviews: number
  image: string
  amenities: string[]
  available: boolean
  category: string
  owner: {
    name: string
    avatar: string
    rating: number
    verified: boolean
  }
  images: string[]
  fullDescription: string
}

export const mockListings: Record<string, Listing[]> = {
  homes: [
    {
      id: "1",
      title: "Modern Downtown Apartment",
      description: "Stylish 2-bedroom apartment in the heart of the city with amazing views",
      fullDescription:
        "Experience luxury living in this beautifully designed 2-bedroom apartment located in the vibrant downtown area. The space features floor-to-ceiling windows offering breathtaking city views, modern appliances, and premium finishes throughout. Perfect for business travelers or couples looking for a sophisticated urban retreat.",
      price: 185,
      location: "Downtown",
      rating: 4.8,
      reviews: 24,
      image: "/modern-apartment.png",
      images: [
        "/modern-apartment.png",
        "/modern-apartment-living-room.png",
        "/modern-apartment-bedroom.png",
        "/modern-apartment-kitchen.png",
        "/modern-apartment-bathroom.png",
      ],
      amenities: ["WiFi", "Kitchen", "Parking", "Air Conditioning", "City View"],
      available: true,
      category: "homes",
      owner: {
        name: "Sarah Johnson",
        avatar: "/woman-profile.png",
        rating: 4.9,
        verified: true,
      },
    },
    {
      id: "2",
      title: "Cozy Suburban House",
      description: "Perfect family home with garden and quiet neighborhood",
      fullDescription:
        "Escape to this charming 3-bedroom house nestled in a peaceful suburban neighborhood. The property features a beautiful garden, spacious living areas, and a fully equipped kitchen. Ideal for families or groups seeking comfort and tranquility while still being close to city amenities.",
      price: 125,
      location: "Suburbs",
      rating: 4.6,
      reviews: 18,
      image: "/suburban-house.png",
      images: [
        "/suburban-house.png",
        "/suburban-living-room.png",
        "/suburban-house-garden.jpg",
        "/suburban-kitchen.png",
      ],
      amenities: ["Garden", "Garage", "Pet-friendly", "BBQ Area", "Quiet Area"],
      available: true,
      category: "homes",
      owner: {
        name: "Michael Chen",
        avatar: "/man-profile.png",
        rating: 4.7,
        verified: true,
      },
    },
    {
      id: "3",
      title: "Luxury Penthouse Suite",
      description: "Premium penthouse with panoramic city views and luxury amenities",
      fullDescription:
        "Indulge in the ultimate luxury experience in this stunning penthouse suite. Featuring panoramic city views, premium amenities including a private pool and gym access, and concierge services. This exclusive property offers the finest in urban living with unparalleled comfort and style.",
      price: 350,
      location: "City Center",
      rating: 4.9,
      reviews: 31,
      image: "/luxury-penthouse-interior.png",
      images: [
        "/luxury-penthouse-interior.png",
        "/luxury-penthouse-living-room.png",
        "/luxury-penthouse-bedroom.png",
        "/luxury-penthouse-terrace.png",
        "/luxury-penthouse-bathroom.png",
      ],
      amenities: ["Pool", "Gym", "Concierge", "Panoramic Views", "Premium Finishes"],
      available: true,
      category: "homes",
      owner: {
        name: "Emma Rodriguez",
        avatar: "/business-woman-profile.png",
        rating: 5.0,
        verified: true,
      },
    },
    {
      id: "9",
      title: "Beachfront Villa",
      description: "Stunning oceanfront villa with private beach access",
      fullDescription:
        "Wake up to ocean views in this magnificent beachfront villa. Features 4 bedrooms, private beach access, infinity pool, and outdoor dining area. Perfect for luxury getaways and special occasions.",
      price: 450,
      location: "Beachfront",
      rating: 4.9,
      reviews: 67,
      image: "/beachfront-villa.png",
      images: ["/beachfront-villa.png"],
      amenities: ["Private Beach", "Pool", "Ocean View", "4 Bedrooms", "Outdoor Kitchen"],
      available: true,
      category: "homes",
      owner: {
        name: "Maria Santos",
        avatar: "/woman-profile.png",
        rating: 4.8,
        verified: true,
      },
    },
    {
      id: "10",
      title: "Mountain Cabin Retreat",
      description: "Rustic cabin surrounded by nature with modern amenities",
      fullDescription:
        "Escape to this cozy mountain cabin featuring rustic charm with modern comforts. Includes fireplace, hot tub, and hiking trails nearby. Perfect for nature lovers and romantic getaways.",
      price: 95,
      location: "Mountains",
      rating: 4.7,
      reviews: 43,
      image: "/secluded-mountain-cabin.png",
      images: ["/secluded-mountain-cabin.png"],
      amenities: ["Fireplace", "Hot Tub", "Hiking Trails", "Mountain View", "Pet-friendly"],
      available: true,
      category: "homes",
      owner: {
        name: "Robert Wilson",
        avatar: "/man-profile.png",
        rating: 4.6,
        verified: true,
      },
    },
  ],
  vehicles: [
    {
      id: "4",
      title: "Tesla Model 3",
      description: "Electric sedan with autopilot and premium interior",
      fullDescription:
        "Experience the future of driving with this Tesla Model 3. Featuring cutting-edge autopilot technology, premium interior with vegan leather seats, and impressive range. Perfect for eco-conscious travelers who don't want to compromise on luxury and performance.",
      price: 95,
      location: "Downtown",
      rating: 4.7,
      reviews: 42,
      image: "/tesla-model-3.png",
      images: [
        "/tesla-model-3.png",
        "/tesla-model-3-exterior.jpg",
        "/tesla-model-3-interior.jpg",
        "/tesla-model-3-dashboard.png",
        "/tesla-model-3-charging.jpg",
      ],
      amenities: ["Electric", "Autopilot", "Premium Audio", "GPS Navigation", "Fast Charging"],
      available: true,
      category: "vehicles",
      owner: {
        name: "David Kim",
        avatar: "/man-profile-tech.jpg",
        rating: 4.8,
        verified: true,
      },
    },
    {
      id: "5",
      title: "BMW X5 SUV",
      description: "Spacious luxury SUV perfect for family trips",
      fullDescription:
        "Travel in comfort and style with this premium BMW X5 SUV. Offering spacious seating for up to 7 passengers, advanced safety features, and luxurious leather interior. Ideal for family vacations, group trips, or when you need extra space and comfort.",
      price: 135,
      location: "Airport",
      rating: 4.5,
      reviews: 28,
      image: "/bmw-x5-suv.png",
      images: [
        "/bmw-x5-suv.png",
        "/bmw-x5-exterior.jpg",
        "/bmw-x5-interior.png",
        "/bmw-x5-cargo-space.jpg",
        "/bmw-x5-dashboard.jpg",
      ],
      amenities: ["7-seater", "GPS", "Leather seats", "Sunroof", "Premium Sound"],
      available: true,
      category: "vehicles",
      owner: {
        name: "Lisa Thompson",
        avatar: "/professional-woman-profile.png",
        rating: 4.6,
        verified: true,
      },
    },
    {
      id: "11",
      title: "Porsche 911 Carrera",
      description: "Iconic sports car for the ultimate driving experience",
      fullDescription:
        "Feel the thrill of driving this legendary Porsche 911 Carrera. With its powerful engine, precision handling, and timeless design, it's perfect for special occasions and weekend adventures.",
      price: 285,
      location: "Luxury District",
      rating: 4.9,
      reviews: 34,
      image: "/porsche-911-classic.png",
      images: ["/porsche-911-classic.png"],
      amenities: ["Sports Car", "Premium Interior", "High Performance", "Convertible Option"],
      available: true,
      category: "vehicles",
      owner: {
        name: "James Mitchell",
        avatar: "/businessman-profile.jpg",
        rating: 4.9,
        verified: true,
      },
    },
    {
      id: "12",
      title: "Ford Transit Van",
      description: "Spacious van perfect for group travel and moving",
      fullDescription:
        "This reliable Ford Transit van offers ample space for passengers or cargo. Ideal for group trips, moving, or transporting equipment. Features modern safety systems and comfortable seating.",
      price: 75,
      location: "Industrial Area",
      rating: 4.3,
      reviews: 19,
      image: "/ford-transit-van.png",
      images: ["/ford-transit-van.png"],
      amenities: ["12-seater", "Large Cargo Space", "GPS", "Backup Camera", "Bluetooth"],
      available: true,
      category: "vehicles",
      owner: {
        name: "Carlos Rodriguez",
        avatar: "/man-profile.png",
        rating: 4.4,
        verified: true,
      },
    },
  ],
  equipment: [
    {
      id: "6",
      title: "Professional Camera Kit",
      description: "Complete photography setup with lenses and accessories",
      fullDescription:
        "Capture stunning photos and videos with this professional camera kit. Includes a high-end DSLR camera, multiple lenses (24-70mm, 85mm portrait, 16-35mm wide), professional lighting equipment, and sturdy tripod. Perfect for photographers, content creators, or special events.",
      price: 65,
      location: "Creative District",
      rating: 4.8,
      reviews: 15,
      image: "/professional-camera-equipment.jpg",
      images: [
        "/professional-camera-equipment.jpg",
        "/professional-camera-kit.jpg",
        "/camera-lenses-collection.jpg",
        "/photography-lighting-setup.png",
        "/camera-tripod-equipment.jpg",
      ],
      amenities: ["Multiple lenses", "Tripod", "Lighting", "Memory Cards", "Carrying Case"],
      available: true,
      category: "equipment",
      owner: {
        name: "Alex Rivera",
        avatar: "/photographer-profile.png",
        rating: 4.9,
        verified: true,
      },
    },
    {
      id: "13",
      title: "DJ Equipment Setup",
      description: "Professional DJ equipment for events and parties",
      fullDescription:
        "Complete DJ setup including turntables, mixer, speakers, and lighting. Perfect for parties, weddings, and events. Includes wireless microphones and extensive music library access.",
      price: 125,
      location: "Entertainment District",
      rating: 4.7,
      reviews: 28,
      image: "/dj-equipment-setup.jpg",
      images: ["/dj-equipment-setup.jpg"],
      amenities: ["Turntables", "Mixer", "Speakers", "Lighting", "Wireless Mics"],
      available: true,
      category: "equipment",
      owner: {
        name: "DJ Marcus",
        avatar: "/dj-profile.png",
        rating: 4.8,
        verified: true,
      },
    },
    {
      id: "14",
      title: "Power Tools Set",
      description: "Complete set of professional power tools for construction",
      fullDescription:
        "Comprehensive collection of professional-grade power tools including drills, saws, sanders, and more. Perfect for construction projects, home renovations, and DIY enthusiasts.",
      price: 45,
      location: "Hardware District",
      rating: 4.5,
      reviews: 22,
      image: "/power-tools-set.jpg",
      images: ["/power-tools-set.jpg"],
      amenities: ["Multiple Tools", "Carrying Case", "Batteries Included", "Instruction Manual"],
      available: true,
      category: "equipment",
      owner: {
        name: "Mike Johnson",
        avatar: "/contractor-profile.jpg",
        rating: 4.6,
        verified: true,
      },
    },
  ],
  events: [
    {
      id: "15",
      title: "Elegant Wedding Venue",
      description: "Beautiful venue perfect for weddings and special celebrations",
      fullDescription:
        "Stunning wedding venue with capacity for 200 guests. Features beautiful gardens, elegant ballroom, and full catering kitchen. Includes tables, chairs, and basic lighting setup.",
      price: 850,
      location: "Garden District",
      rating: 4.9,
      reviews: 45,
      image: "/elegant-wedding-venue.png",
      images: ["/elegant-wedding-venue.png"],
      amenities: ["200 Capacity", "Garden", "Catering Kitchen", "Tables & Chairs", "Parking"],
      available: true,
      category: "events",
      owner: {
        name: "Victoria Adams",
        avatar: "/event-planner-profile.jpg",
        rating: 4.9,
        verified: true,
      },
    },
    {
      id: "16",
      title: "Corporate Conference Room",
      description: "Modern conference room with AV equipment for business meetings",
      fullDescription:
        "Professional conference room equipped with state-of-the-art AV equipment, high-speed internet, and comfortable seating for up to 50 people. Perfect for corporate meetings, presentations, and seminars.",
      price: 185,
      location: "Business District",
      rating: 4.6,
      reviews: 33,
      image: "/modern-conference-room.png",
      images: ["/modern-conference-room.png"],
      amenities: ["AV Equipment", "High-speed WiFi", "50 Capacity", "Catering Available", "Parking"],
      available: true,
      category: "events",
      owner: {
        name: "Corporate Solutions Inc.",
        avatar: "/corporate-profile.jpg",
        rating: 4.7,
        verified: true,
      },
    },
  ],
  fashion: [
    {
      id: "17",
      title: "Designer Evening Gown",
      description: "Elegant designer gown perfect for formal events",
      fullDescription:
        "Stunning designer evening gown in midnight blue. Features intricate beadwork and flowing silhouette. Available in multiple sizes. Perfect for galas, weddings, and formal events.",
      price: 95,
      location: "Fashion District",
      rating: 4.8,
      reviews: 12,
      image: "/elegant-evening-gown.png",
      images: ["/elegant-evening-gown.png"],
      amenities: ["Designer Brand", "Multiple Sizes", "Professional Cleaning", "Accessories Available"],
      available: true,
      category: "fashion",
      owner: {
        name: "Sophia Chen",
        avatar: "/fashion-designer-profile.jpg",
        rating: 4.9,
        verified: true,
      },
    },
    {
      id: "18",
      title: "Luxury Watch Collection",
      description: "Premium watches for special occasions and business meetings",
      fullDescription:
        "Curated collection of luxury watches including Rolex, Omega, and other premium brands. Perfect for special occasions, business meetings, or when you want to make a statement.",
      price: 125,
      location: "Luxury District",
      rating: 4.9,
      reviews: 27,
      image: "/luxury-watches.jpg",
      images: ["/luxury-watches.jpg"],
      amenities: ["Premium Brands", "Multiple Styles", "Authentication Included", "Insurance Covered"],
      available: true,
      category: "fashion",
      owner: {
        name: "Alexander Luxury",
        avatar: "/luxury-dealer-profile.jpg",
        rating: 5.0,
        verified: true,
      },
    },
  ],
  tech: [
    {
      id: "8",
      title: "Gaming Setup",
      description: "Complete gaming setup with high-end PC and peripherals",
      fullDescription:
        "Dive into the world of gaming with this complete high-end gaming setup. Featuring a powerful PC, top-tier peripherals, and a comfortable gaming chair. Perfect for gamers looking for the ultimate gaming experience.",
      price: 75,
      location: "Tech Hub",
      rating: 4.8,
      reviews: 18,
      image: "/placeholder.svg?key=gaming456",
      images: [
        "/placeholder.svg?key=gaming456",
        "/gaming-setup-pc.png",
        "/gaming-setup-chair.jpg",
        "/gaming-setup-peripherals.png",
      ],
      amenities: ["High-end PC", "Gaming Chair", "Peripherals", "Surround Sound"],
      available: true,
      category: "tech",
      owner: {
        name: "Jane Lee",
        avatar: "/gamer-profile.png",
        rating: 4.9,
        verified: true,
      },
    },
    {
      id: "19",
      title: "VR Headset & Setup",
      description: "Complete virtual reality setup for immersive experiences",
      fullDescription:
        "Experience the future with this complete VR setup including headset, controllers, and tracking system. Perfect for gaming, training, or virtual meetings. Includes popular VR games and applications.",
      price: 55,
      location: "Tech Hub",
      rating: 4.7,
      reviews: 24,
      image: "/vr-headset-setup.jpg",
      images: ["/vr-headset-setup.jpg"],
      amenities: ["VR Headset", "Controllers", "Tracking System", "Game Library", "Setup Support"],
      available: true,
      category: "tech",
      owner: {
        name: "Tech Innovations",
        avatar: "/tech-company-profile.jpg",
        rating: 4.8,
        verified: true,
      },
    },
  ],
  sports: [
    {
      id: "7",
      title: "Mountain Bike",
      description: "High-quality mountain bike perfect for trails",
      fullDescription:
        "Experience the thrill of the trails with this high-quality mountain bike. Designed for rugged terrain, it offers reliable performance and comfort for long rides. Perfect for outdoor enthusiasts and adventure seekers.",
      price: 35,
      location: "Mountain Trails",
      rating: 4.7,
      reviews: 10,
      image: "/placeholder.svg?key=bike123",
      images: ["/placeholder.svg?key=bike123", "/mountain-bike-closeup.png", "/mountain-bike-in-action.jpg"],
      amenities: ["Suspension", "Wide tires", "Water bottle holder", "Lightweight"],
      available: true,
      category: "sports",
      owner: {
        name: "John Smith",
        avatar: "/sportsman-profile.png",
        rating: 4.5,
        verified: true,
      },
    },
    {
      id: "20",
      title: "Surfboard & Wetsuit",
      description: "Complete surfing gear for beach adventures",
      fullDescription:
        "Hit the waves with this professional surfboard and wetsuit combo. Includes 9ft longboard perfect for beginners and intermediates, plus full wetsuit and safety leash.",
      price: 45,
      location: "Beach Area",
      rating: 4.6,
      reviews: 18,
      image: "/surfboard-wetsuit.jpg",
      images: ["/surfboard-wetsuit.jpg"],
      amenities: ["9ft Longboard", "Wetsuit", "Safety Leash", "Wax Included", "Beach Delivery"],
      available: true,
      category: "sports",
      owner: {
        name: "Ocean Adventures",
        avatar: "/surfer-profile.jpg",
        rating: 4.7,
        verified: true,
      },
    },
    {
      id: "21",
      title: "Tennis Racket Set",
      description: "Professional tennis equipment for court play",
      fullDescription:
        "Complete tennis set including professional rackets, balls, and court accessories. Perfect for recreational play or serious training. Includes multiple racket options for different skill levels.",
      price: 25,
      location: "Sports Complex",
      rating: 4.4,
      reviews: 14,
      image: "/tennis-racket-set.jpg",
      images: ["/tennis-racket-set.jpg"],
      amenities: ["Multiple Rackets", "Tennis Balls", "Carrying Bag", "Different Weights"],
      available: true,
      category: "sports",
      owner: {
        name: "Tennis Pro Shop",
        avatar: "/tennis-coach-profile.jpg",
        rating: 4.5,
        verified: true,
      },
    },
  ],
}

// Helper function to get listing by ID
export function getListingById(id: string): Listing | undefined {
  for (const category of Object.values(mockListings)) {
    const listing = category.find((item) => item.id === id)
    if (listing) return listing
  }
  return undefined
}

// Helper function to get listings by category
export function getListingsByCategory(category: string): Listing[] {
  return mockListings[category] || []
}

// Mock user profile data
export interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  location: string
  avatar: string
  joinDate: string
  rating: number
  totalBookings: number
  totalListings: number
  bio: string
}

export interface UserListing {
  id: string
  title: string
  description: string
  price: number
  category: string
  image: string
  status: "active" | "inactive"
  bookings: number
  rating: number
  views: number
}

export interface UserBooking {
  id: string
  listingTitle: string
  listingImage: string
  owner: string
  dates: string
  totalPrice: number
  status: "confirmed" | "completed" | "pending" | "cancelled"
  category: string
}

export const mockUserProfile: UserProfile = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "/user-avatar.jpg",
  joinDate: "January 2024",
  rating: 4.8,
  totalBookings: 12,
  totalListings: 3,
  bio: "Passionate about sharing great experiences through rentals. I love photography, travel, and outdoor adventures.",
}

export const mockUserListings: UserListing[] = [
  {
    id: "user-listing-1",
    title: "Vintage Camera Collection",
    description: "Professional vintage cameras for photography enthusiasts",
    price: 35,
    category: "equipment",
    image: "/professional-camera-equipment.jpg",
    status: "active",
    bookings: 8,
    rating: 4.9,
    views: 156,
  },
  {
    id: "user-listing-2",
    title: "Mountain Bike",
    description: "High-quality mountain bike perfect for trails",
    price: 25,
    category: "sports",
    image: "/placeholder.svg?key=bike123",
    status: "active",
    bookings: 5,
    rating: 4.7,
    views: 89,
  },
  {
    id: "user-listing-3",
    title: "Gaming Setup",
    description: "Complete gaming setup with high-end PC and peripherals",
    price: 45,
    category: "tech",
    image: "/placeholder.svg?key=gaming456",
    status: "inactive",
    bookings: 12,
    rating: 4.8,
    views: 234,
  },
]

export const mockUserBookings: UserBooking[] = [
  {
    id: "booking-1",
    listingTitle: "Tesla Model 3",
    listingImage: "/tesla-model-3.png",
    owner: "David Kim",
    dates: "Dec 15-18, 2024",
    totalPrice: 340,
    status: "confirmed",
    category: "vehicles",
  },
  {
    id: "booking-2",
    listingTitle: "Modern Downtown Apartment",
    listingImage: "/modern-apartment.png",
    owner: "Sarah Johnson",
    dates: "Nov 20-25, 2024",
    totalPrice: 720,
    status: "completed",
    category: "homes",
  },
  {
    id: "booking-3",
    listingTitle: "Professional Camera Kit",
    listingImage: "/professional-camera-equipment.jpg",
    owner: "Alex Rivera",
    dates: "Jan 10-12, 2025",
    totalPrice: 135,
    status: "pending",
    category: "equipment",
  },
]
