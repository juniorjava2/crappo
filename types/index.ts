import {MouseEventHandler} from "react"

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title?: string;
    rightIcon?: string;
    iconSize?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

  export interface NumbersProps{
    iconUrl: string;
    amount: string;
    description: string;
  }

  export interface CryptoCardProps{
    title?:string;
    initial:string;
    desc:string;
    icon:string;
    bgColor:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }