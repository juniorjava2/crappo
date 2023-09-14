"use client"
import Image from "next/image";
import {CustomButton} from "."

const Features =()=>{
    return(
        <div className="bg-[#2b076e] py-20 items-center flex flex-col text-white">
            {/* <div className="absolute [overflow:none] -mt-[500px] left-[837px] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(255,_255,_255,_0.16)_0deg,_rgba(255,_255,_255,_0)_360deg)] w-[686px] h-[686px] [transform:_rotate(90deg)] [transform-origin:0_0]" /> */}
      
            <b className="text-[40px] leading-[150%] inline-block font-body-small-regular text-center w-[758px]">
               Market sentiments, portfolio, and run the infrastructure of your choice
            </b>
            <div className="flex flex-row items-center justify-between w-full px-40 pb-24 pt-28">
                <div className="left ">
                    <h3 className="text-[32px] font-bold">Invest Smart</h3>
                    <p className="tracking-[0.01em] leading-[28px] inline-block w-[408px] my-8">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
                    <CustomButton title="Learn More" containerStyles="bg-blue-500 rounded-full" textStyles="text-lg leading-[150%] font-medium font-body-small-regular text-white text-center" />
                </div>
                <div className="right">
                    <div className="rounded-2xl bg-[#35068c] w-[580px] h-[298px]  p-10">
                        <div className="header flex flex-row items-center justify-between">
                            <div className="left flex flex-row items-center justify-start">
                                <div className="relative w-10 h-10">
                                    <Image fill alt="" src="/group-171.svg"/>
                                </div>
                                <div className="txt mx-4">
                                    <h1 className="text-[24px] text-white font-bold">Bitcoin <span className="text-base font-semibold text-[#cfcfcf] opacity-[0.7]">BTC</span></h1>
                                    <h3 className="text-[#f2f2f2] tracking-[0.01em] font-medium">0.00080 BTC</h3>
                                </div>
                            </div>
                            <div className="right text-[#42ffff]">
                                <p>+125%</p>
                            </div>
                        </div>
                        <div className="imga relative w-[501.93px] h-[137.6px]">
                            <Image fill alt="" src="/group-111.svg"/>
                        </div>
                        <div className="w-[inherit] pl-10 pr-24 pt-0 flex flex-row items-center justify-between">
                            <div className=" rounded-2xl bg-[#491f98] [backdrop-filter:blur(250px)] w-[178px] h-[184px] text-xl items-center p-4 text-left">
                                <h2 className="tracking-[0.01em] leading-[28px] font-semibold inline-block w-[146px]">Increase in Trade</h2>
                                <div className="flex flex-row items-center justify-start text-[24px] gap-[7px] my-4 text-left">
                                    <h2 className="tracking-[0.01em]">+75%</h2>
                                    <div className="relative h-6 w-6">
                                        <Image fill alt="" src="/arrowup.svg"/>
                                    </div>
                                </div>
                                <p className="text-[#f2f2f2] text-base tracking-[0.01em]">Sell option</p>
                            </div>
                            <div className=" -mt-24  rounded-2xl w-[169px] h-[84px] bg-[#491f98] shadow-[15px_20px_40px_rgba(116,_117,_218,_0.15)] flex flex-col items-center p-4 text-left text-[24px]">
                                <h2 className="font-bold tracking-[0.01em] text-white">$15.32</h2>
                                <p className="text-[#f2f2f2] text-base tracking-[0.01em]">Price in dollar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;