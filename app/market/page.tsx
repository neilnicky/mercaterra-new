"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ProductCard } from "@/components/market/product-card"
import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"

// Mock product data
const mockProducts = [
  {
    id: "1",
    title: "Organic Tomatoes",
    description: "Fresh, vine-ripened organic tomatoes grown without pesticides",
    price: 4.99,
    quantity: 50,
    unit: "lb",
    category: "Vegetables",
    imageUrl: "/placeholder.svg?height=200&width=300",
    farmerId: "farmer1",
    farmer: {
      id: "farmer1",
      name: "Green Valley Farm",
      region: "California",
      rating: 4.8,
    },
    availability: true,
    pickupAvailable: true,
    deliveryAvailable: true,
    tags: ["organic", "local", "fresh"],
  },
  {
    id: "2",
    title: "Fresh Strawberries",
    description: "Sweet, juicy strawberries picked this morning",
    price: 6.99,
    quantity: 25,
    unit: "lb",
    category: "Fruits",
    imageUrl: "/placeholder.svg?height=200&width=300",
    farmerId: "farmer2",
    farmer: {
      id: "farmer2",
      name: "Berry Fields Farm",
      region: "Oregon",
      rating: 4.9,
    },
    availability: true,
    pickupAvailable: true,
    deliveryAvailable: false,
    tags: ["fresh", "sweet", "local"],
  },
  {
    id: "3",
    title: "Free-Range Eggs",
    description: "Farm-fresh eggs from happy, free-range chickens",
    price: 5.99,
    quantity: 100,
    unit: "dozen",
    category: "Dairy & Eggs",
    imageUrl: "/placeholder.svg?height=200&width=300",
    farmerId: "farmer3",
    farmer: {
      id: "farmer3",
      name: "Sunrise Poultry",
      region: "Texas",
      rating: 4.7,
    },
    availability: true,
    pickupAvailable: true,
    deliveryAvailable: true,
    tags: ["free-range", "fresh", "protein"],
  },
  {
    id: "4",
    title: "Organic Lettuce",
    description: "Crisp, fresh organic lettuce perfect for salads",
    price: 2.99,
    quantity: 30,
    unit: "head",
    category: "Vegetables",
    imageUrl: "/placeholder.svg?height=200&width=300",
    farmerId: "farmer1",
    farmer: {
      id: "farmer1",
      name: "Green Valley Farm",
      region: "California",
      rating: 4.8,
    },
    availability: true,
    pickupAvailable: true,
    deliveryAvailable: true,
    tags: ["organic", "crisp", "salad"],
  },
  {
    id: "5",
    title: "Raw Honey",
    description: "Pure, unprocessed honey from local beehives",
    price: 12.99,
    quantity: 15,
    unit: "jar",
    category: "Pantry",
    imageUrl: "/placeholder.svg?height=200&width=300",
    farmerId: "farmer4",
    farmer: {
      id: "farmer4",
      name: "Golden Hive Apiary",
      region: "Vermont",
      rating: 5.0,
    },
    availability: true,
    pickupAvailable: true,
    deliveryAvailable: true,
    tags: ["raw", "natural", "sweet"],
  },
  {
    id: "6",
    title: "Grass-Fed Beef",
    description: "Premium grass-fed beef, ethically raised",
    price: 18.99,
    quantity: 20,
    unit: "lb",
    category: "Meat",
    imageUrl: "/placeholder.svg?height=200&width=300",
    farmerId: "farmer5",
    farmer: {
      id: "farmer5",
      name: "Prairie Cattle Ranch",
      region: "Montana",
      rating: 4.6,
    },
    availability: true,
    pickupAvailable: false,
    deliveryAvailable: true,
    tags: ["grass-fed", "premium", "ethical"],
  },
]

const categories = ["All", "Vegetables", "Fruits", "Dairy & Eggs", "Meat", "Pantry"]
const regions = ["All", "California", "Oregon", "Texas", "Vermont", "Montana"]

export default function MarketPage() {
  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Filter and search products
  useEffect(() => {
    let filtered = products

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.farmer.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Region filter
    if (selectedRegion !== "All") {
      filtered = filtered.filter((product) => product.farmer.region === selectedRegion)
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.farmer.rating - a.farmer.rating
        case "name":
        default:
          return a.title.localeCompare(b.title)
      }
    })

    setFilteredProducts(filtered)
  }, [products, searchQuery, selectedCategory, selectedRegion, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Fresh Local Marketplace</h1>
          <p className="text-muted-foreground">Discover fresh, local produce directly from farmers in your area</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products, farmers, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Region</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Sort by</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Farmer Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">View</label>
                  <div className="flex gap-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        <div
          className={
            viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode={viewMode} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
                setSelectedRegion("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
