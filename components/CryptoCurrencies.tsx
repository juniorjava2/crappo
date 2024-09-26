'use client'

import { useState } from 'react'
import Image from "next/image"
import CustomButton from "./CustomButton"

interface CryptoCardProps {
  icon: string
  title: string
  initial: string
  desc: string
  index: number
  isActive: boolean // New prop to check if the card is active
}

const CryptoCard = ({ icon, title, initial, desc, index, isActive }: CryptoCardProps) => {
  return (
    <div className={`text-center flex flex-col items-center justify-start rounded-xl  px-4 py-8 w-full max-w-[370px] h-auto transition-all duration-300 ease-in-out`}>
      <div className="relative w-20 h-20 mb-6">
        <Image
          src={icon}
          alt={`${title} icon`}
          fill
          className="object-contain"
        />
      </div>
      <h2 className="text-2xl md:text-[30px] font-extrabold mb-2">
        {title} <span className="font-medium text-lg opacity-70">{initial}</span>
      </h2>
      <p className="mb-6 text-sm md:text-base tracking-[0.01rem] leading-[28px]">
        {desc}
      </p>
      <CustomButton 
        title={isActive ? "Start mining" : ""}  // Show text only when active
        containerStyles={`mt-4 rounded-full transition-all duration-300 ease-in-out ${isActive ? "bg-blue-500 text-white" : "bg-transparent text-gray-800"}`} 
        rightIcon="/arrow-right.svg" 
        iconSize="w-12 h-12 md:w-16 md:h-16" 
        textStyles="relative text-base md:text-lg leading-[150%] font-medium text-neutral-white text-center" 
      />
    </div>
  )
}

const CryptoCurrencies = () => {
  const [activeIndex, setActiveIndex] = useState(0)  // State to track active card

  const cryptoData = [
    {
      icon: "/icon.svg",
      title: "Bitcoin",
      initial: "BTC",
      desc: "Digital currency in which a record of transactions is maintained."
    },
    {
      icon: "/icon1.svg",
      title: "Ethereum",
      initial: "ETH",
      desc: "Blockchain technology to create and run decentralized digital applications."
    },
    {
      icon: "/simpleiconslitecoin.svg",
      title: "Litecoin",
      initial: "LTC",
      desc: "Cryptocurrency that enables instant payments to anyone in the world."
    }
  ]

  return (
    <div className="flex flex-col items-center pt-10 md:pt-20 bg-gradient-to-b from-[#f8f9fb] to-[#e4e4e6]">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-20 px-4 max-w-4xl">
        Trade securely and market the high growth cryptocurrencies.
      </h2>
      <div className="w-full px-4 md:px-8 pb-10 md:pb-20 flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-evenly gap-8">
        {cryptoData.map((crypto, index) => (
          <div 
            key={crypto.title}
            className={`cursor-pointer ${
              index === activeIndex 
                ? 'bg-[#2b076e] text-white shadow-2xl transform scale-105 rounded-xl' 
                : 'bg-white text-gray-800 shadow-xl rounded-xl'
            }`}
            onClick={() => setActiveIndex(index)}  // Update active card on click
          >
            <CryptoCard 
              {...crypto}
              index={index}
              isActive={index === activeIndex}  // Pass down active state
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CryptoCurrencies
