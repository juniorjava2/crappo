'use client'

import Image from "next/image"
import { CustomButton } from "."

const WhyUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="relative w-full h-[300px] md:h-[360px]">
          <Image 
            fill 
            alt="Why choose CRAPPO" 
            src="/illustrations.svg"
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4 md:mb-6">
          Why you should choose CRAPPO
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-6 md:mb-8">
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>
        <CustomButton 
          title="Learn More" 
          containerStyles="rounded-full bg-blue-500 hover:bg-blue-600 transition-colors" 
          textStyles="text-white font-semibold"
        />
      </div>
    </div>
  )
}

const WhyUsContainer = () => {
  return (
    <div className="bg-[hsl(240,54%,11%)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[997.88px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.1))] [transform:_rotate(60deg)] [transform-origin:0_0] pointer-events-none" />
      <WhyUs />
    </div>
  )
}

export default WhyUsContainer