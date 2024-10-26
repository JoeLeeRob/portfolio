import React from 'react'
import { Reenie_Beanie, Orbitron } from 'next/font/google'
import Image from 'next/image'

const reenieBeanie = Reenie_Beanie({
    subsets: ['latin'],
    weight: '400'
  })
  
const orbitron = Orbitron({
subsets: ['latin'],
weight: '400'
})

export default function Hero() {
    return (
        <div className="relative flex flex-col justify-center p-24">
            <div className="hero-image-wrapper">
                <Image
                    src='/images/joe_profile_blk.jpg'
                    alt='Joe Robinson profile picture'
                    layout='fill'
                    objectFit="cover"
                />
            </div>
            <span className={`${reenieBeanie.className} absolute transform rotate-[340deg] 2xl:text-[6rem] 2xl:top-[5%] 2xl:left-[32%] lg:top-[20%] lg:left-[35%] lg:text-[3rem] xl:top-[10%] xl:left-[37%] xl:text-[5rem]`}
            >
            Joe
            </span>
            <p className={`${orbitron.className} first-name text-[5vw] leading-[6rem] xl:text-[5vw] xl:leading-[5vw] lg:text-[4vw] lg:leading-[6vw]`}
            >
            <span className="line-through">Joseph</span>
            </p>
            <p className={`${orbitron.className} 2xl:text-[9vw] 2xl:leading-[9vw] xl:text-[8vw] xl:leading-[8rem] lg:text-[7vw] lg:leading-[7vw]`}
            >
            Robinson
            </p>
            <p className="2xl:text-[2rem] 2xl:leading-[2rem] xl:text-[1.75rem] xl:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[1rem]">Software Developer</p>
      </div>
    )
}
