export type UserRole = "farmer" | "buyer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  region?: string;
  phone?: string;
  photo?: string;
  location?: string;
  createdAt?: string;
  updatedAt?: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string; // kg, lb, piece, etc.
  category: string;
  farmerId: string;
  farmerName: string;
  images: string[];
  inStock: boolean;
  quantity: number;
  harvestDate: string;
  location: string;
  organic: boolean;
  rating: number;
  reviewCount: number;
}

export interface Order {
  id: string;
  buyerId: string;
  farmerId: string;
  products: CartItem[];
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  orderDate: string;
  deliveryDate?: string;
  shippingAddress: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  product?: Product;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "ready"
  | "delivered"
  | "cancelled";

export interface Message {
  id: string;
  orderId?: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: Date;
  sender?: User;
  receiver?: User;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
