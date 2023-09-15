import {Statistics,ProfitTracker,Features, Calculate, CryptoCurrencies, Hero, Portfolio, WhyUsContainer, Graph } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero/>
      <Portfolio/>
      <WhyUsContainer/>
      <Calculate/>
      <CryptoCurrencies/>
      <Features/>
      <Statistics/>
      {/* <ProfitTracker/> */}
    </main>
  )
}
