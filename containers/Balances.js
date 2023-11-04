import Image from "next/image";

export default function Balances() {
  return (
    <div className="min-h-screen justify-start items-center flex flex-col bg-krab bg-cover w-screen">
      <main className="text-center flex flex-col items-center">
      <Image src="/scary.gif" width={300} height={200}></Image>
      <div className="text-xl text-black bg-white underline mt-2 break-all">Wallet (Hot) : 0x6670509058C999AD7dFbf573109cbA8a9e356067</div>
      <div className=" text-white bg-[#ff808b]  underline mt-2">last updated : 4.11.2023 09:30:17</div></main>
      <main className=" text-black flex md:flex-row flex-col items-center justify-between">
        <Image className="md:block hidden px-2"  src="/patricksuit2.png" width={150} height={100}></Image>
        <div>
          <div className="text-5xl flex">BALANCES</div>
         {/* <table class="table-auto">
            <tr className="bg-white  underline text-xl ">
              <th>TOKEN</th>
              <th className="px-4">SYMBOL</th>
              <th className="md:block hidden ">ADDRESS</th>
              <th className="px-4"> BALANCE </th>
              <th>VALUE (USD)</th>
            </tr>

            <tbody>
              <tr className="bg-[#ff808b] ">
                <td className="px-4">I HAVE 3 DOLLARS</td>
                <td className="px-4">$IHAVE3</td>
                <td className="md:block hidden ">
                  0xDF9E6bC447a6A0cDA4A24e746a661579BC079299
                </td>
                <td className="px-4">13.000.000</td>
                <td>20.000</td>
  </tr>
            
            </tbody>
          </table>*/}
          <div className="text-5xl bg-[#ff808b]">Will be announced here !</div>
          
        </div>
        <Image className="px-2" src="/patricksuit.png" width={100} height={100}></Image>
      </main>
    </div>
  );
}
