import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-[#495e57] bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-[#F4CE14]">Little Lemon</h1>
            <h2 className="h2-bold text-white">Chicago</h2>
            <p className="p-regular-20 md:p-regular-24 text-white">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Button size="lg" className="button w-full sm:w-fit bg-[#F4CE14] hover:bg-[#ffe047e1]">
              <Link href="/order">
                Explore Now
              </Link>
            </Button>
          </div>
          <Image
            src="/assets/images/restauranfood.jpg"
            alt="hero"
            width={400}
            height={100}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
    </>
  );
}
