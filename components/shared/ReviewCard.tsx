import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        <div className="flex justify-center items-center flex-col">
          <Image
            src="/assets/images/customer1.jpeg"
            alt="customer"
            width={240}
            height={240}
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 max-w-sm text-center info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore
            labore magnam distinctio ratione sapiente velit ullam numquam
            accusamus, a culpa architecto. Facilis amet doloribus accusantium
            quod, saepe magni. Soluta?
          </p>
          <div className="mt-3 flex justify-center items-center gap-2.5">
            <Image
              src="/assets/images/star.svg"
              width={24}
              height={24}
              alt="rating star"
              className="object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">5</p>
          </div>
          <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">
            Morich Brown
          </h3>
        </div>

        <div className="flex justify-center items-center flex-col">
          <Image
            src="/assets/images/customer2.svg"
            alt="customer"
            width={240}
            height={240}
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 max-w-sm text-center info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore
            labore magnam distinctio ratione sapiente velit ullam numquam
            accusamus, a culpa architecto. Facilis amet doloribus accusantium
            quod, saepe magni. Soluta?
          </p>
          <div className="mt-3 flex justify-center items-center gap-2.5">
            <Image
              src="/assets/images/star.svg"
              width={24}
              height={24}
              alt="rating star"
              className="object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">4</p>
          </div>
          <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">
            Lota Mongeskar
          </h3>
        </div>

        <div className="flex justify-center items-center flex-col">
          <Image
            src="/assets/images/reviewer1.png"
            alt="customer"
            width={240}
            height={240}
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 max-w-sm text-center info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore
            labore magnam distinctio ratione sapiente velit ullam numquam
            accusamus, a culpa architecto. Facilis amet doloribus accusantium
            quod, saepe magni. Soluta?
          </p>
          <div className="mt-3 flex justify-center items-center gap-2.5">
            <Image
              src="/assets/images/star.svg"
              width={24}
              height={24}
              alt="rating star"
              className="object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">4.5</p>
          </div>
          <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">
            John Doe
          </h3>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
