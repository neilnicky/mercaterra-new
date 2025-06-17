"use client"

import { motion } from "framer-motion"
import { UserPlus, ListPlus, ShoppingCart, Truck } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-green-600" />,
      title: "Create an account",
      description: "Sign up as a farmer or buyer to get started on MercaTerra.",
    },
    {
      icon: <ListPlus className="h-10 w-10 text-green-600" />,
      title: "List or browse products",
      description: "Farmers list their products, while buyers browse the marketplace.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-green-600" />,
      title: "Place orders",
      description: "Buyers select products and place orders directly with farmers.",
    },
    {
      icon: <Truck className="h-10 w-10 text-green-600" />,
      title: "Delivery or pickup",
      description: "Choose between delivery or pickup options for your fresh produce.",
    },
  ]

  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">How MercaTerra Works</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Our platform makes it easy to connect farmers with buyers in just a few simple steps.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border hidden md:block"></div>

        <div className="space-y-8 md:space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row items-center gap-4 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`flex w-full md:w-1/2 ${index % 2 === 0 ? "md:justify-end" : "md:order-1"}`}>
                <div className="flex flex-col items-center md:items-start gap-2 p-4">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-center md:text-left text-muted-foreground">{step.description}</p>
                </div>
              </div>

              <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-background shadow-md">
                {step.icon}
              </div>

              <div className={`hidden w-1/2 md:block ${index % 2 === 0 ? "md:order-1" : ""}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
