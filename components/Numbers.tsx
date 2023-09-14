import Image from "next/image"
import { NumbersProps } from "@/types"

const Numbers = ({iconUrl, amount, description}:NumbersProps) => {
  return (
    <div className="numbers_container flex flex-row items-center justify-start mr-10" >
        <div className="icons_container w-20 h-20 relative">
            <Image fill alt="" src={iconUrl}/>
        </div>
        <div className="mx-4">
            <h1 className="text-white text-4xl font-extrabold"> {amount} </h1>
            <h3 className="text-slate-300 font-bold text-xl">{description}</h3>
        </div>
    </div>
  )
}
export default Numbers