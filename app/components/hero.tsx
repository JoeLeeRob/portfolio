import React from "react";
import { Reenie_Beanie, Orbitron } from "next/font/google";
import Image from "next/image";

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-center p-24">
      <div className="hero-image-wrapper">
        <Image
          src="/images/joe_profile_blk.jpg"
          alt="Joe Robinson profile picture"
          layout="fill"
          objectFit="cover"
        />
        <div>test</div>
      </div>
      <span
        className={`${reenieBeanie.className} absolute transform rotate-[340deg] 2xl:text-[6rem] 2xl:top-[5%] 2xl:left-[32%] lg:top-[20%] lg:left-[35%] lg:text-[3rem] xl:top-[10%] xl:left-[37%] xl:text-[5rem]`}
      >
        Joe
      </span>
      <p
        className={`${orbitron.className} first-name text-[5vw] leading-[120%] xl:text-[5vw] lg:text-[4vw]`}
      >
        <span className="line-through">Joseph</span>
      </p>
      <p
        className={`${orbitron.className} leading-[120%] 2xl:text-[9vw] xl:text-[8vw] lg:text-[7vw]`}
      >
        Robinsons
      </p>
      <p className="leading-[120%] 2xl:text-[2rem] xl:text-[1.75rem] lg:text-[1.25rem]">
        Software Developer
      </p>
    </div>
  );
}
