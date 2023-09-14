import Image from "next/image";
import { Numbers } from ".";

const Portfolio= () => {
    return (
      <div className="flex flex-row items-center justify-evenly bg-[#0d0d2b] px-12 pt-20 pb-12">
        <Numbers iconUrl="/icon4.svg" amount="$30B" description="Digital Currency Exchanged"/>
        <Numbers iconUrl="/icon3.svg" amount="10M+" description="Trusted Wallets Investor"/>
        <Numbers iconUrl="/icon2.svg" amount="195" description="Countries Supported"/>
      </div>
    )
  }
  export default Portfolio;