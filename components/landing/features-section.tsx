"use client";

import {
  Leaf,
  Shield,
  Truck,
  Users
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Fresh & Organic",
      description:
        "Direct from farm to your table. Get the freshest produce without any middlemen.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Support Local Farmers",
      description:
        "Connect directly with local farmers and support your community's agriculture.",
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery from farm to your doorstep within 24-48 hours.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality Guaranteed",
      description:
        "Every product is quality-checked and comes with our freshness guarantee.",
    },
  ];

  return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why Choose MercaTerra?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We connect you directly with local farmers, ensuring the freshest
          produce and supporting your community.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
