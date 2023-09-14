"use client"
import Image from "next/image";
import { CustomButton } from ".";

const WhyUs =()=>{
    return(
        <div className="mx-12 flex flex-row items-center justify-evenly">
            <div className="image w-full h-[360px] mt-40 relative">
                <Image fill alt="" src="/illustrations.svg"/>
            </div>
            <div className="text">
                <h1 className="text-white text-4xl font-extrabold mr-40">Why you should choose CRAPPO</h1>
                <h3 className="text-slate-300 font-bold text-xl my-8 mr-40">
                  Experience the next generation cryptocurrency platform. No financial
                  borders, extra fees, and fake reviews.
                </h3>
                <CustomButton title="Learn More" containerStyles="rounded-full bg-blue-500" textStyles="text-white font-semibold"/>
            </div>
        </div>
    )
}
export  default WhyUs;