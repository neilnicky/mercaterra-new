"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductFiltersProps {
  onFiltersChange: (filters: any) => void
}

export function ProductFilters({ onFiltersChange }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 50])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [deliveryOptions, setDeliveryOptions] = useState<string[]>([])

  const tags = ["organic", "local", "fresh", "free-range", "grass-fed", "raw", "natural"]
  const deliveryTypes = ["pickup", "delivery"]

  const handleTagChange = (tag: string, checked: boolean) => {
    const newTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag)
    setSelectedTags(newTags)
    onFiltersChange({ tags: newTags, priceRange, deliveryOptions })
  }

  const handleDeliveryChange = (option: string, checked: boolean) => {
    const newOptions = checked ? [...deliveryOptions, option] : deliveryOptions.filter((o) => o !== option)
    setDeliveryOptions(newOptions)
    onFiltersChange({ tags: selectedTags, priceRange, deliveryOptions: newOptions })
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
    onFiltersChange({ tags: selectedTags, priceRange: value, deliveryOptions })
  }

  const clearFilters = () => {
    setPriceRange([0, 50])
    setSelectedTags([])
    setDeliveryOptions([])
    onFiltersChange({ tags: [], priceRange: [0, 50], deliveryOptions: [] })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium">Price Range</Label>
          <div className="mt-2">
            <Slider value={priceRange} onValueChange={handlePriceChange} max={50} min={0} step={1} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div>
          <Label className="text-sm font-medium">Tags</Label>
          <div className="mt-2 space-y-2">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  id={tag}
                  checked={selectedTags.includes(tag)}
                  onCheckedChange={(checked) => handleTagChange(tag, checked as boolean)}
                />
                <Label htmlFor={tag} className="text-sm capitalize">
                  {tag}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Options */}
        <div>
          <Label className="text-sm font-medium">Delivery Options</Label>
          <div className="mt-2 space-y-2">
            {deliveryTypes.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={deliveryOptions.includes(option)}
                  onCheckedChange={(checked) => handleDeliveryChange(option, checked as boolean)}
                />
                <Label htmlFor={option} className="text-sm capitalize">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  )
}
