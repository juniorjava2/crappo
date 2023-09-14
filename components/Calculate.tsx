"use client"
import Image from "next/image"
import { CustomButton } from "."

const Calculate = () => {
  return (
    <div className="flex flex-col items-center w-full [background:linear-gradient(180deg,_#f8f9fb,_#fafbff)]">
        <div className="flex  flex-col items-center justify-center pt-40 pb-80 text-lg text-[#e0e0e0] bg-[hsl(240,54%,11%)] w-full ">
            <b className="text-[40px] text-center leading-[150%] inline-block text-white">
                Check how much you can earn
            </b>
            <div className="px-8 text-[18px] w-[622px] text-center leading-[150%] inline-block">
                Let’s check your hash rate to see how much you will earn today,
                Exercitation veniam consequat sunt nostrud amet.
            </div>
        </div>

        <div className=" flex flex-col items-center  -mt-40   py-10 px-8 rounded-lg  bg-white justify-start shadow-xl ">
            <div className="flex flex-row items-center justify-start">
                <div className="border-b-2 border-slate-700">
                    <input type="text" className="border-none w-[400px] pl-4 placeholder-gray-400 focus:outline-none" placeholder="Enter your has rate"/>
                </div>
                <div className="border-b-2 border-slate-700 flex flex-row items-center mx-4">
                    <select className="focus:outline-none text-gray-500 font-bold">
                        <option selected className="bg-transparent text-gray-500 font-bold" >TH/s</option>
                    </select>
                    <div className="w-4 h-4 relative items-center">
                        <Image fill alt="" src="/icon--arrow-down.svg" />
                    </div>
                </div>
                <CustomButton title="Calculate" containerStyles="rounded-full bg-blue-500 text-white ml-8"/>
            </div>
            <div className="flex flex-col items-start justify-start mt-6  w-full">
                <p className="text-blue-500 text-top-[48px] left-[48px] tracking-[0.04em] leading-[150%] uppercase font-medium">ESTIMATED 24 HOUR REVENUE:</p>
                <h1 className="text-[32px] font-bold text-black-100">
                    {`0.055 130 59 ETH`} 
                    <span className="text-blue-500" >($1275)</span>
                </h1>
                <p className="text-[#828282]">Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
        </div>
    </div>

  )
}
export default Calculate