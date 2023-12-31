import Image from "next/image";
import { Inter } from "next/font/google";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Memes from "@/containers/Memes";
import Shit from "@/containers/Shit";
import Link from "next/link";
import Balances from "@/containers/Balances";
const inter = Inter({ subsets: ["latin"] });

//#ff808b

export default function Home() {
  return (
    <>
      <main
        className={`flex   flex-col min-h-screen  items-center  bg-home  bg-cover bg-center  p-12 `}
      >
        <div className="items-center  top-0  md:top-28 justify-center md:hidden flex ">
          <Image
            src="/dance2.gif"
            width={150}
            height={150}
            className="md:w-[150px] w-[100px]"
          ></Image>
          <Image
            src="/run.gif"
            width={150}
            height={150}
            className="md:ml-20 ml-6 md:block hidden md:w-[250px] w-[150px]"
          ></Image>
          <Image
            src="/dance2.gif"
            width={150}
            height={150}
            className="md:w-[150px] w-[100px]"
          ></Image>
          <Image
            src="/dance2.gif"
            width={150}
            height={150}
            className="md:w-[150px] md:hidden block w-[100px]"
          ></Image>
        </div>

        <div className=" absolute md:mt-1 mt-[112px] text-black text-5xl md:text-6xl flex items-center">
          IHAVE3DOLLARS
        </div>

        <div className="   text-[#ff808b] text-5xl md:text-6xl flex items-center">
          IHAVE3DOLLARS
        </div>

        <div className=" absolute md:mt-24 mt-[192px] text-black text-5xl md:text-6xl flex items-center">
          $IHAVE3
        </div>

        <div className="   text-[#ff808b] mt-8 text-5xl md:text-6xl flex items-center">
          $IHAVE3
        </div>

        <div className="text-black bg-[#ff808b] text-center underline mt-12 text-lg md:text-3xl break-all">
          Contract address: 
        </div>
        <div className="text-black bg-[#ff808b] text-center underline mb-12 text-lg md:text-3xl break-all">
         0x2A172e18cdab77d9F50c8E900E9Bf7602489D989
        </div>
        <div className="items-center   justify-start flex ">
          <Image
            src="/moneyfly2.gif"
            width={100}
            height={100}
            className="md:w-[100px] mx-4 w-[100px]"
          ></Image>
          <Image
            src="/moneyfly2.gif"
            width={100}
            height={100}
            className="md:w-[100px] md:block hidden mx-4 w-[100px]"
          ></Image>
          <Image
            src="/moneyfly2.gif"
            width={100}
            height={100}
            className="md:w-[100px] md:block hidden mx-4 w-[100px]"
          ></Image>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
          <Image className=" px-2"  src="/patricksuit2.png" width={150} height={100}></Image>

          <div className="text-white bg-[#ff808b] underline text-xl md:text-4xl ">
            Join Community !!!!
          </div>
          <Image className="px-2" src="/patricksuit2.png" width={150} height={100}></Image>
</div>
          <div className="flex w-full justify-center">
            <Link href="https://t.me/ihave3" target="_blank">
            
              <BsTelegram
                size={56}
                className="bg-[#ff808b] p-2 border cursor-pointer border-black"
              ></BsTelegram>
            </Link>
            <Link target="_blank" href="https://twitter.com/IHave3ERC">
            <FaXTwitter
              size={56}
              className="bg-[#ff808b] p-2 border cursor-pointer border-black"
            ></FaXTwitter></Link>
            <Link  target="_blank" href="https://app.uniswap.org/swap?outputCurrency=0x2a172e18cdab77d9f50c8e900e9bf7602489d989">
            <Image
              src="/uni.png"
              width={56}
              height={56}
              className="bg-[#ff808b] cursor-pointer p-2 border border-black"
            ></Image></Link>
          </div>
        </div>

        <div className="items-center absolute top-64 md:top-28 left-0 justify-start hidden md:flex flex-col ">
          <Image
            src="/dance2.gif"
            width={150}
            height={150}
            className="md:w-[150px] w-[100px]"
          ></Image>
          <Image
            src="/run.gif"
            width={150}
            height={150}
            className="md:ml-20 md:w-[250px] w-[150px]"
          ></Image>
          <Image
            src="/dance2.gif"
            width={150}
            height={150}
            className="md:w-[150px] w-[100px]"
          ></Image>
        </div>
        <div className="items-center absolute right-0 top-64  md:top-28 justify-start  hidden md:flex flex-col">
          <Image
            src="/dance2.gif"
            width={150}
            height={150}
            className="md:w-[150px] w-[100px]"
          ></Image>
          <Image
            src="/run.gif"
            width={150}
            height={150}
            className="md:ml-20 ml-8 md:w-[250px] w-[150px]"
          ></Image>
          <Image
            src="/dance2.gif"
            width={150}
            height={150}
            className="md:w-[150px] w-[100px]"
          ></Image>
        </div>
        <div className="flex md:flex-row items-center flex-col w-full justify-between">
          <Image
            src="/20.jpg"
            width={300}
            height={100}
            className="pt-12 "
          ></Image>
          <Image
            src="/buyyy.jpeg"
            width={300}
            height={100}
            className="pt-12"
          ></Image>
          <Image
            src="/3.jpg"
            width={300}
            height={100}
            className="pt-12"
          ></Image>
        </div>
      </main>

      <Memes></Memes>
      <Balances></Balances>
      <Shit></Shit>
    </>
  );
}
