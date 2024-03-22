import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CardMenu() {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Greek Salad</CardTitle>
          <CardDescription>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/assets/images/greek salad.jpg"
            width={400}
            height={200}
            alt=""
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">$12.99</Button>
          <Button className=" w-full text-black sm:w-fit bg-[#F4CE14] hover:bg-[#ffe047e1]">
            Order a delivery
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Bruchetta</CardTitle>
          <CardDescription>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/assets/images/bruchetta.jpg"
            width={400}
            height={200}
            alt=""
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">$5.99</Button>
          <Button className=" w-full text-black sm:w-fit bg-[#F4CE14] hover:bg-[#ffe047e1]">
            Order a delivery
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Lemon Dessert</CardTitle>
          <CardDescription>
            This comes straight from grandma`s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/assets/images/lemon-dessert.jpg"
            width={400}
            height={200}
            alt=""
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">$5.00</Button>
          <Button className=" w-full text-black sm:w-fit bg-[#F4CE14] hover:bg-[#ffe047e1]">
            Order a delivery
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
