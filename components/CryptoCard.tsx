"use client"

import Image from "next/image";
import  CustomButton  from "./CustomButton";
import {CryptoCardProps} from "@/types";


const CryptoCard =({bgColor, icon, title, initial, desc}:CryptoCardProps)=>{

    return(
        <div className={`${bgColor}  [backdrop-filter:blur(250px)] w-[370px] h-[433px]  text-center flex flex-col items-center justify-start rounded-xl  px-2`}>
            <div className="relative w-20 h-20 mt-12 ">
                <Image
                    src={icon}
                    alt="arrow_left"
                    fill
                    className="object-contain"
                 />
            </div>
            <h2 className="text-[30px] font-extrabold mt-10">{title} <span className="font-medium text-lg opacity-[0.7] leading-[150%]">{initial}</span></h2>
            <p className="my-4 mx-4 text-base tracking-[0.01rem] leading-[28px]"> {desc} </p>
            <CustomButton containerStyles=" mt-4" rightIcon="/arrow-right.svg" iconSize="w-16 h-16" textStyles="relative text-lg leading-[150%] font-medium font-body-small-regular text-neutral-white text-center" />
        </div>
    )
}
export default CryptoCard;