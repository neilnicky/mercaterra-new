"use client"


export function HowItWorksSection() {
  

  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get farm-fresh produce delivered to your door
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Browse Products
              </h3>
              <p className="text-gray-600">
                Explore fresh produce from local farmers in your area. Filter by
                organic, price, and location.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Place Order
              </h3>
              <p className="text-gray-600">
                Add items to your cart and checkout securely. Choose your
                preferred delivery time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enjoy Fresh Food
              </h3>
              <p className="text-gray-600">
                Receive fresh produce at your doorstep within 24-48 hours. Enjoy
                farm-to-table quality!
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
