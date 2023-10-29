import Image from "next/image";
import { Inter } from "next/font/google";
import {BsTelegram} from "react-icons/bs"
import {FaXTwitter} from "react-icons/fa6"
import Memes from "@/containers/Memes";
import Shit from "@/containers/Shit";
const inter = Inter({ subsets: ["latin"] });

//#ff808b

export default function Home() {
  return (
    <>
    <main
      className={`flex   flex-col min-h-screen  items-center  bg-home  bg-cover bg-center  p-12 `}
    >
      <div className="items-center  top-0  md:top-28 justify-center md:hidden flex ">
      <Image src="/dance2.gif" width={150} height={150} className="md:w-[150px] w-[100px]"></Image>
      <Image src="/run.gif" width={150} height={150}className="md:ml-20 ml-6 md:block hidden md:w-[250px] w-[150px]"></Image>
      <Image src="/dance2.gif" width={150} height={150}className="md:w-[150px] w-[100px]"></Image>
      <Image src="/dance2.gif" width={150} height={150}className="md:w-[150px] md:hidden block w-[100px]"></Image>
      
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

     <div className="text-black bg-[#ff808b] underline my-12 text-3xl break-all">
      Contract address: 0x00000000000000000000000000
     </div>
     <div className="items-center   justify-start flex ">
      <Image src="/moneyfly2.gif" width={150} height={150}className="md:w-[150px] mx-4 w-[100px]"></Image>
      <Image src="/moneyfly2.gif" width={150} height={150}className="md:w-[150px] md:block hidden mx-4 w-[100px]"></Image>
      <Image src="/moneyfly2.gif" width={150} height={150}className="md:w-[150px] md:block hidden mx-4 w-[100px]"></Image>
      
      </div>
    <div className="flex flex-col">
     <div className="text-white bg-[#ff808b] underline  text-4xl ">
      Join Community !!!!
     </div>
     <div className="flex w-full justify-center">
     <BsTelegram size={56} className="bg-[#ff808b] p-2 border cursor-pointer border-black"></BsTelegram>
     <FaXTwitter size={56} className="bg-[#ff808b] p-2 border cursor-pointer border-black"></FaXTwitter>
     <Image src="/uni.png" width={56} height={56} className="bg-[#ff808b] cursor-pointer p-2 border border-black"></Image>
     </div>
     </div>

      <div className="items-center absolute top-64 md:top-28 left-0 justify-start hidden md:flex flex-col ">
      <Image src="/dance2.gif" width={150} height={150}className="md:w-[150px] w-[100px]"></Image>
      <Image src="/run.gif" width={150} height={150}className="md:ml-20 md:w-[250px] w-[150px]"></Image>
      <Image src="/dance2.gif" width={150} height={150}className="md:w-[150px] w-[100px]"></Image>
      
      </div>
      <div className="items-center absolute right-0 top-64  md:top-28 justify-start  hidden md:flex flex-col">
      <Image src="/dance2.gif" width={150} height={150} className="md:w-[150px] w-[100px]"></Image>
      <Image src="/run.gif" width={150} height={150}className="md:ml-20 ml-8 md:w-[250px] w-[150px]"></Image>
      <Image src="/dance2.gif" width={150} height={150}className="md:w-[150px] w-[100px]"></Image>
      
      </div>
      <div className="flex md:flex-row items-center flex-col w-full justify-between">
      <Image src="/20.jpg" width={300} height={100} className="pt-12 "></Image>
      <Image src="/16.jpeg" width={300} height={100} className="pt-12"></Image>
      <Image src="/3.jpg" width={300} height={100} className="pt-12"></Image>

      </div>
      
    </main>
   
    <Memes></Memes>
    <Shit></Shit>
    </>
  );
}
