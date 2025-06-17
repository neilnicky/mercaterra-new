"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"farmer" | "buyer">("farmer")

  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <motion.h1
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Farm to Table, <span className="text-green-600">Simplified</span>
          </motion.h1>
          <motion.p
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            MercaTerra connects farmers directly with buyers. No middlemen, just fresh produce from farm to table.
          </motion.p>
        </div>

        <div className="flex w-full max-w-md flex-col items-center gap-6">
          <div className="flex w-full rounded-lg border p-1">
            <Button
              variant="ghost"
              className={cn("w-full rounded-md", activeTab === "farmer" && "bg-primary text-primary-foreground")}
              onClick={() => setActiveTab("farmer")}
            >
              I'm a Farmer
            </Button>
            <Button
              variant="ghost"
              className={cn("w-full rounded-md", activeTab === "buyer" && "bg-primary text-primary-foreground")}
              onClick={() => setActiveTab("buyer")}
            >
              I'm a Buyer
            </Button>
          </div>

          <motion.div
            className="w-full"
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "farmer" ? (
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-xl font-semibold">Sell your produce directly</h3>
                <p className="text-muted-foreground">
                  List your products, set your prices, and connect with buyers in your area.
                </p>
                <Button asChild size="lg" className="mt-2">
                  <Link href="/auth/register?role=farmer">Get Started as a Farmer</Link>
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 text-center">
                <h3 className="text-xl font-semibold">Buy fresh, local produce</h3>
                <p className="text-muted-foreground">
                  Browse products from local farmers and get fresh produce delivered or pick up.
                </p>
                <Button asChild size="lg" className="mt-2">
                  <Link href="/auth/register?role=buyer">Get Started as a Buyer</Link>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </section>
  )
}
