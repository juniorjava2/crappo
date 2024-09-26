import {Statistics,ProfitTracker,Features, Calculate, CryptoCurrencies, Hero, Portfolio, WhyUsContainer } from '@/components'
import CandlestickChart from '@/components/Chart'
import Image from 'next/image'

export default function Home() {

  const data = {
    labels: [],
    datasets: [
      {
        label: 'Candlestick Chart',
        data: [
          { t: Date.now(), o: 100, h: 120, l: 90, c: 110 },
          { t: Date.now(), o: 10, h: 20, l: 90, c: 50 },
          { t: Date.now(), o: 100, h: 120, l: 90, c: 110 },
          // Add more data points here
        ],
      },
    ],
  };

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
      {/* <CandlestickChart data={data}/> */}
    </main>
  )
}
