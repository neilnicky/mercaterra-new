"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Chef",
      content:
        "The vegetables I get from MercaTerra are incredibly fresh. I can taste the difference!",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=srgb&dpr=1&w=100",
    },
    {
      name: "Mike Chen",
      role: "Restaurant Owner",
      content:
        "As a restaurant owner, quality is everything. MercaTerra delivers consistent, high-quality produce.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=srgb&dpr=1&w=100",
    },
    {
      name: "Emily Davis",
      role: "Nutrition Coach",
      content:
        "I recommend MercaTerra to all my clients. Fresh, organic, and competitively priced.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=srgb&dpr=1&w=100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of satisfied customers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  width={400}
                  height={400}
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
