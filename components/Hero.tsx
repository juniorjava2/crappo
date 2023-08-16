"use client";
import Image from "next/image";
import  CustomButton  from "./CustomButton";
import { Navbar } from ".";

const Hero = () => {
    const handleScroll =()=>{}
  return(
    <div className="hero ">
      <div className="hero_info w-full pt-8 ">
        <div className="flex flex-row items-center h-10 w-[380px]  rounded-full ">
          <CustomButton title="75% SAVE" containerStyles="bg-white rounded-full text-[#0d0d2b] font-bold h-10"/>
          <p className="ml-4 mr-2 text-white ">For the Black Friday Weekend</p>
          <span className=" bg-white opacity-10 w-[380px] h-10 rounded-full absolute " />
        </div>
        <h1 className="hero__title">Fastest & secure platform to invest in crypto</h1>
        <p className="hero__subtitle">
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </p>
        <CustomButton title="Try for Free" containerStyles="bg-blue-500 rounded-full mt-4" rightIcon="/arrow-right1.svg" iconSize="w-8 h-8" textStyles="relative text-lg leading-[150%] font-medium font-body-small-regular text-neutral-white text-center" />
      </div>
      <div className="hero__image">
        <Image fill alt="" src="/illustration.svg" />
      </div>
      <div className="absolute top-[1037.86px] left-[191px] [background:linear-gradient(180.09deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.04)_38.79%,_rgba(255,_255,_255,_0))] w-[120px] h-[997.88px] [transform:_rotate(-120deg)] [transform-origin:0_0]" />
      <div className="absolute top-[1072.86px] left-[660px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.04),_rgba(255,_255,_255,_0.01))] w-[120px] h-[997.88px] [transform:_rotate(-120deg)] [transform-origin:0_0]" />
      <div/>
    </div>
  )
}
export default Hero