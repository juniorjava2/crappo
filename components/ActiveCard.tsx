"use client"

import Image from "next/image";
import  CustomButton  from "./CustomButton";
import {CryptoCardProps} from "@/types";


const ActiveCard =()=>{

    return(
        <div className={`text-white bg-[#2b076e]   [backdrop-filter:blur(250px)] w-[370px] h-[433px]  text-center flex flex-col items-center justify-start rounded-xl  px-2`}>
            <div className="relative w-20 h-20 mt-12 ">
                <Image
                    src="/icon.svg"
                    alt="arrow_left"
                    fill
                    className="object-contain"
                 />
            </div>
            <h2 className="text-[30px] font-extrabold mt-10">Bitcoin <span className="font-medium text-lg opacity-[0.7] leading-[150%]">BTC</span></h2>
            <p className="my-4 mx-4 text-base tracking-[0.01rem] leading-[28px]"> Digital currency in which a record of transactions is maintained. </p>
            <CustomButton title="Start mining" containerStyles="bg-blue-500 rounded-full mt-4" rightIcon="/arrow-right1.svg" iconSize="w-8 h-8" textStyles="relative text-lg leading-[150%] font-medium font-body-small-regular text-neutral-white text-center" />
        </div>
    )
}
export default ActiveCard;