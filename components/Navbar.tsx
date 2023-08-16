"use client"

import React from "react";
import Image from "next/image"
import styles from "./nav.module.css"
import Link from "next/link";
import { CustomButton } from ".";
const Navbar = () => {
  return (
    <div className="navbar_container ">
        <div className="flex flex-row items-center justify-start ml-12 text-white">
          <Image className="mx-4" width={40} height={40} alt="" src="/logo.svg" />
          <div className="font-bold">CRAPPO</div>
        </div>
        <div className="flex items-center mr-10">
          <div className="nav_menu px-4 text-white">
            <Link href="/" className="mx-4">Products</Link>
            <Link href="/" className="mx-4">About</Link>
            <Link href="/" className="mx-4">Features</Link>
            <Link href="/" className="mx-4">Contact</Link>
          </div>
          <div className="flex flex-row px-4 text-white">
            <CustomButton title="Login" />
            <div className="divider"/>
            <CustomButton title="Register" containerStyles="rounded-full bg-blue-500"/>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
