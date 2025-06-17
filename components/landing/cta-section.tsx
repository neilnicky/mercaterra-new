import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/20 rounded-lg">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to join the local food movement?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Whether you're a farmer looking to sell your produce or a buyer seeking fresh local food, MercaTerra is here
          to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg">
            <Link href="/auth/register?role=farmer">Join as a Farmer</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/auth/register?role=buyer">Join as a Buyer</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
