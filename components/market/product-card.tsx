"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Truck, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

interface Product {
  id: string
  title: string
  description: string
  price: number
  quantity: number
  unit: string
  category: string
  imageUrl: string
  farmerId: string
  farmer: {
    id: string
    name: string
    region: string
    rating: number
  }
  availability: boolean
  pickupAvailable: boolean
  deliveryAvailable: boolean
  tags: string[]
}

interface ProductCardProps {
  product: Product
  viewMode: "grid" | "list"
}

export function ProductCard({ product, viewMode }: ProductCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-48 h-48 md:h-auto relative">
          <Image src={product.imageUrl || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{formatPrice(product.price)}</p>
                <p className="text-sm text-muted-foreground">per {product.unit}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pb-2">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{product.farmer.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{product.farmer.rating}</span>
              </div>
              <Badge variant="secondary">{product.farmer.region}</Badge>
            </div>
            <div className="flex items-center gap-4 mb-3">
              {product.pickupAvailable && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Package className="h-4 w-4" />
                  Pickup
                </div>
              )}
              {product.deliveryAvailable && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  Delivery
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <div className="flex gap-2 w-full">
              <Button asChild className="flex-1">
                <Link href={`/products/${product.id}`}>View Details</Link>
              </Button>
              <Button variant="outline">Add to Cart</Button>
            </div>
          </CardFooter>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{product.category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-semibold line-clamp-1">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-xl font-bold">{formatPrice(product.price)}</p>
            <p className="text-xs text-muted-foreground">per {product.unit}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{product.quantity} available</p>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <MapPin className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{product.farmer.name}</span>
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 ml-1" />
          <span className="text-xs">{product.farmer.rating}</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          {product.pickupAvailable && (
            <div className="flex items-center gap-1">
              <Package className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Pickup</span>
            </div>
          )}
          {product.deliveryAvailable && (
            <div className="flex items-center gap-1">
              <Truck className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Delivery</span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {product.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{product.tags.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex gap-2 w-full">
          <Button asChild size="sm" className="flex-1">
            <Link href={`/products/${product.id}`}>View</Link>
          </Button>
          <Button variant="outline" size="sm">
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
