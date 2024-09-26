'use client'

import Image from "next/image"
import { CustomButton } from "."

const Features = () => {
  return (
    <div className="bg-[#2b076e] py-10 md:py-20 px-4 md:px-8 items-center flex flex-col text-white">
      <h2 className="text-2xl md:text-4xl leading-tight font-bold text-center max-w-4xl mb-10 md:mb-20">
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl">
        <div className="left mb-10 md:mb-0 md:mr-8 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Invest Smart</h3>
          <p className="tracking-wide leading-7 max-w-md mb-8">
            Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.
          </p>
          <CustomButton 
            title="Learn More" 
            containerStyles="bg-blue-500 rounded-full px-6 py-3 inline-block"
            textStyles="text-lg leading-6 font-medium text-white text-center" 
          />
        </div>
        <div className="right w-full max-w-xl">
          <div className="rounded-2xl bg-[#35068c] p-4 md:p-6 lg:p-10">
            <div className="header flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <div className="left flex flex-row items-center justify-start mb-4 sm:mb-0">
                <div className="relative w-10 h-10 mr-4">
                  <Image fill alt="Bitcoin icon" src="/group-171.svg" />
                </div>
                <div className="txt">
                  <h1 className="text-xl md:text-2xl text-white font-bold">
                    Bitcoin <span className="text-sm md:text-base font-semibold text-[#cfcfcf] opacity-70">BTC</span>
                  </h1>
                  <h3 className="text-[#f2f2f2] tracking-wide font-medium text-sm md:text-base">0.00080 BTC</h3>
                </div>
              </div>
              <div className="right text-[#42ffff] text-sm md:text-base">
                <p>+125%</p>
              </div>
            </div>
            <div className="imga relative w-full aspect-[501/137] mb-6">
              <Image fill alt="Bitcoin graph" src="/group-111.svg" className="object-contain" />
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
              <div className="rounded-2xl bg-[#491f98] p-4 text-left w-full sm:w-[48%]">
                <h2 className="tracking-wide leading-7 font-semibold text-lg mb-4">Increase in Trade</h2>
                <div className="flex flex-row items-center justify-start text-xl gap-2 mb-4">
                  <h2 className="tracking-wide">+75%</h2>
                  <div className="relative h-6 w-6">
                    <Image fill alt="Arrow up" src="/arrowup.svg" />
                  </div>
                </div>
                <p className="text-[#f2f2f2] text-sm tracking-wide">Sell option</p>
              </div>
              <div className="rounded-2xl w-full sm:w-[48%] bg-[#491f98] shadow-[15px_20px_40px_rgba(116,_117,_218,_0.15)] flex flex-col items-center p-4 text-center sm:text-left">
                <h2 className="font-bold tracking-wide text-white text-xl mb-2">$15.32</h2>
                <p className="text-[#f2f2f2] text-sm tracking-wide">Price in dollar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features