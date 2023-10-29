import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Righteous } from "next/font/google";

import Head from 'next/head';

const righteous = Righteous({ weight: "400", subsets: ["latin"] });



export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  return (
    <div>
     
      <nav className="w-screen bg-[#ff808b] shadow">
        <div className="justify-between px-4 mx-auto py-2 lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex w-full items-center justify-between py-3 md:py-5 md:block">
             <div className="flex justify-center text-white text-xl md:text-3xl items-center">
                <main >
                <span className="break-normal">💵 💵 💵</span> IHAVE3DOLLARS  <span  className="break-normal">💵 💵 💵</span>
                </main>
                
              </div>
             
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
                <div className={righteous.className}>
              <ul className="items-center justify-between space-y-8 md:flex md:space-x-6 md:space-y-0">

                <Image src="/patrick.png" width={70} height={70}></Image>
               
                 <div ><div className={righteous.className}>
            <div className="px-4 text-white rounded-3xl flex items-center py-4 justify-center border border-white bg-flowers bg-cover">
                <Link href="https://app.uniswap.org/#/tokens/ethereum/0x13d0ff7b89824b0862725cce4b22bcdcf196473f">
                Buy Now</Link>
            </div></div>
          </div>
              </ul>
              </div>
            </div>
          </div>
          

         
        </div>
      </nav>
     
    </div>
  );
}