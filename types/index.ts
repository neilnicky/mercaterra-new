export type UserRole = "farmer" | "buyer"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  region?: string
  phone?: string
  photo?: string
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  farmerId: string
  title: string
  description: string
  category: string
  price: number
  quantity: number
  unit: string
  availability: boolean
  pickupAvailable: boolean
  deliveryAvailable: boolean
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
  farmer?: User
}

export interface Order {
  id: string
  buyerId: string
  farmerId: string
  items: OrderItem[]
  totalAmount: number
  status: OrderStatus
  createdAt: Date
  updatedAt: Date
  buyer?: User
  farmer?: User
}

export interface OrderItem {
  id: string
  productId: string
  quantity: number
  price: number
  product?: Product
}

export type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "delivered" | "cancelled"

export interface Message {
  id: string
  orderId?: string
  senderId: string
  receiverId: string
  message: string
  timestamp: Date
  sender?: User
  receiver?: User
}

export interface CartItem {
  productId: string
  quantity: number
  product: Product
}
