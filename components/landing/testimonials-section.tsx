"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "MercaTerra has transformed my small farm business. I now have direct access to customers who value fresh, local produce.",
      author: "Maria Rodriguez",
      role: "Organic Vegetable Farmer",
      avatar: "MR",
    },
    {
      quote:
        "As a chef, I need the freshest ingredients. MercaTerra connects me directly with local farmers for the best quality produce.",
      author: "James Chen",
      role: "Restaurant Owner",
      avatar: "JC",
    },
    {
      quote:
        "I love knowing exactly where my food comes from. MercaTerra makes it easy to support local farmers and eat healthier.",
      author: "Sarah Johnson",
      role: "Health-Conscious Consumer",
      avatar: "SJ",
    },
  ]

  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What Our Users Say</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Hear from farmers and buyers who are already using MercaTerra.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 flex flex-col gap-4">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
