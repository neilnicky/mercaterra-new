"use client"

import { motion } from "framer-motion"
import { Leaf, ShoppingBasket, TruckIcon, DollarSign, MessageCircle, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: "Direct Farm Connection",
      description: "Connect directly with local farmers and cut out the middlemen.",
    },
    {
      icon: <ShoppingBasket className="h-10 w-10 text-green-600" />,
      title: "Fresh Produce",
      description: "Get access to the freshest local produce, harvested at peak ripeness.",
    },
    {
      icon: <TruckIcon className="h-10 w-10 text-green-600" />,
      title: "Flexible Delivery",
      description: "Choose between convenient delivery or farm pickup options.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-green-600" />,
      title: "Fair Pricing",
      description: "Farmers set their own prices, and buyers pay fair market rates.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-green-600" />,
      title: "Direct Communication",
      description: "Message farmers directly with questions about their products.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-green-600" />,
      title: "Sales Analytics",
      description: "Farmers get insights into their sales performance and customer preferences.",
    },
  ]

  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Features that make a difference</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          MercaTerra provides tools for both farmers and buyers to create a sustainable local food ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 rounded-full bg-muted p-2">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-center text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
