import Menu from "@/components/shared/Menu";
import ReviewCard from "@/components/shared/ReviewCard";
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
            <p className="p-regular-18 md:p-regular-20 text-white">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Button
              size="lg"
              className="w-full text-black sm:w-fit bg-[#F4CE14] hover:bg-[#ffe047e1]"
            >
              <Link href="/reservations">Reserve a Table</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={7000}
            height={3500}
            className="max-h-[60vh] rounded-lg object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">This Weeks Specials</h2>
        <Menu />
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Testimonials</h2>
        <ReviewCard />
      </section>
    </>
  );
}
