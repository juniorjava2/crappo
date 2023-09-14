import { CryptoCard ,ActiveCard} from "."

const CryptoCurrencies = () => {
  return (
    <div className="flex flex-col items-center pt-20 [background:linear-gradient(180deg,_#f8f9fb,_#e4e4e6)]">
      <b className="my-20 text-[40px] text-center leading-[150%] inline-block  w-[741px] text-gray-800">
         Trade securely and market the high growth cryptocurrencies.
      </b>
      <div className="z-0 mx-20 pb-20 flex flex-col md:flex-row sm:flex-row items-center justify-evenly w-full">
          <ActiveCard />
          <CryptoCard title="Ethereum" initial="ETH" desc=" Blockchain technology to create and run decentralized digital applications." icon="/icon1.svg" bgColor="bg-white shadow-2xl mix-blend-overlay text-grey"/>
          <CryptoCard title="Litecoin" initial="LTC" desc="Cryptocurrency that enables instant payments to anyone in the world." icon="/simpleiconslitecoin.svg" bgColor="bg-white shadow-2xl mix-blend-overlay text-grey"/>
      </div>
    </div>

  )
}
export default CryptoCurrencies