import React from 'react';
import Image from "next/image";
import facebook from "../public/facebook.svg";
import insta from "../public/insta.svg";
import twitter from "../public/twitter.svg";
import pattern2 from "../public/pattern2.png";

const Footer = () => {
  return (
    <footer className="flex justify-between items-end w-full absolute bottom-0 pb-2 h-28">
        <div className="flex flex-col space-y-8 pl-12 pb-4">
          <div className="flex justify-evenly">
            <Image className="ml-4" src={facebook} alt="facebook" />
            <Image className="ml-4" src={twitter} alt="twitter" />
            <Image className="ml-4" src={insta} alt="instagram" />
          </div>
          <p className="text-black/50 text-xs">
            &copy; 2022 AFAK TANZANIA COMPANY LTD
          </p>
        </div>
        <Image src={pattern2} alt="pattern" width={150} height={220} />
      </footer>
  )
}

export default Footer