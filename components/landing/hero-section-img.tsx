import { ArrowRight, Leaf } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HeroSectionImg() {
  return (
    <div>
      {" "}
      <section className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fresh from
                <span className="text-green-600"> Farm</span>
                <br />
                Direct to
                <span className="text-green-600"> You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect directly with local farmers and get the freshest produce
                delivered to your doorstep. No middlemen, just pure farm-fresh
                goodness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  //   onClick={() => onNavigate('market')}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-200 flex items-center justify-center group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  //   onClick={() => onNavigate('signup')}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Join as Farmer
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=srgb&dpr=1&w=600"
                alt="Fresh vegetables"
                width={800}
                height={800}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-gray-600">Fresh Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
