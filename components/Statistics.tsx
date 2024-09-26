"use client"
import Image from "next/image"
import { CustomButton, Graph } from ".";

const Statistics =()=>{
    return(
        <div className="bg-[#2b076e] flex flex-row items-center justify-between text-[10px] text-white font-body-small-regular ">
            <div className="left w-[auto]">
                <div className="heading rounded-br-2xl rounded-tr-2xl rounded-tl-none rounded-bl-none bg-[#35068c] w-[710px] p-4 flex flex-row items-center justify-between">
                    <div className="flex flex-row items-top justify-start ">
                        <div className="relative w-4 h-4">
                            <Image fill alt="" src="/group-962.svg"/>
                        </div>
                        <div className="ml-4">
                            <h3 className="tracking-[0.01em] leading-[150%] font-medium">+73% <span>(+$146)</span></h3>
                            <p className="tracking-[0.01em] leading-[150%] text-[#bdbdbd] text-[10px] ">Trends</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="tracking-[0.01em] leading-[150%] font-medium">$8256.00</h3>
                        <p className="tracking-[0.01em] leading-[150%] text-[#bdbdbd] text-[10px] ">Total amount</p>
                    </div>
                    <div>
                        <h3 className="tracking-[0.01em] leading-[150%] font-medium">$51234.31</h3>
                        <p className="tracking-[0.01em] leading-[150%] text-[#bdbdbd] text-[10px] ">High</p>
                    </div>
                    <div>
                        <h3 className="tracking-[0.01em] leading-[150%] font-medium">$1531.80</h3>
                        <p className="tracking-[0.01em] leading-[150%] text-[#bdbdbd] text-[10px] ">Low</p>
                    </div>
                    <div className="flex flex-row items-center justify-start mr-4">
                        <div className="relative w-11 h-11 rounded-[50%] object-cover">
                            <Image fill alt="" src="/ellipse-48@2x.png"/>
                        </div>
                        <div className="ml-4">
                            <h3 className="tracking-[0.01em] leading-[150%] font-medium">Andriy Lenin</h3>
                            <p className="tracking-[0.01em] leading-[150%] text-[#bdbdbd] text-[10px] ">VERIFIED</p>
                        </div>
                    </div>
                </div>
                <div className="body rounded-br-2xl rounded-tr-2xl rounded-tl-none rounded-bl-none bg-[#35068c] max-w-[710px] max-h-[453px] mt-2">
                    <div className="graph_header flex flex-row items-center justify-between py-4 w-[inherit]">
                        <div className="flex flex-row items-center justify-between ">
                            <div className="flex flex-row items-center justify-start ml-4">
                                <h3 className="font-medium text-xs tracking-[0.01em] leading-[150%]">USD/BTC</h3>
                                <div className="relative w-4 h-4 ml-4">
                                    <Image fill alt="" src="/group-961.svg"/>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mx-20">
                                <div className="mr-4">
                                    <h3 className="font-medium text-xs tracking-[0.01em] leading-[150%]">$6278.13</h3>
                                    <p className="tracking-[0.01em] leading-[150%] text-[#bdbdbd] text-[10px]">Last price</p>
                                </div>
                                <p className="text-[#42ffff] text-[10px]">+2.74%</p>
                            </div>
                            <div >
                                <h3 className="font-medium text-xs tracking-[0.01em] leading-[150%]">38.25 BTC</h3>
                                <p className="tracking-[0.01em] leading-[150%] text-[#bdbdbd] text-[10px]">Volume(24h)</p>
                            </div>
                        </div>
                        <div className="buttons flex flex-row items-center justify-start mr-2">
                            <CustomButton title="Buy" containerStyles="text-white bg-[#6edcb5] px-6 py-2 rounded-[32px] mr-2" textStyles="text-xs leading-[150%] font-medium font-body-small-regular tex-center" />
                            <CustomButton title="Sell" containerStyles="text-white bg-[#ff325f] px-6 py-2 rounded-[32px] mr-4" textStyles="text-xs leading-[150%] font-medium font-body-small-regular tex-center" />
                        </div>
                    </div>
                    <div className="graph_body flex flex-row  ">
                        <div className="relative graph  w-full h-80 mt-8 mb-4 object-contain">
                           <Image fill alt="" src="/graph_image.png"/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="right mr-10">
                <h3 className="text-[32px] font-bold">Invest Smart</h3>
                <p className="tracking-[0.01em] leading-[28px] inline-block w-[408px] my-8 text-[15px]">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
                <CustomButton title="Learn More" containerStyles="bg-blue-500 rounded-full" textStyles="text-lg leading-[150%] font-medium font-body-small-regular text-white text-center" />
            </div>
        </div>
    )
}
export default Statistics;