import Image from "next/image";

export default function Shit() {
  return (
    <div className="min-h-screen py-12 justify-start items-center flex flex-col bg-bikini bg-cover w-screen">
        <div className="flex md:flex-row flex-col items-center justify-between w-full px-4 md:px-36">

      <Image
        src="/cmeme.jpeg"
        className="mt-8"
        width={600}
        height={400}
      ></Image>
       <div>
       <Image src="/chinesebuy.gif" width={500} height={200}></Image>
        <Image src="/japanbuy.gif" width={500} height={200}></Image>{" "} 
        <Image src="/russianbuy.gif" width={500} height={200}></Image>
        <Image src="/arabbuy.gif" width={500} height={200}></Image>
     
        <Image src="/greenbuy.gif" width={500} height={200}></Image>
   
      
      </div>
      </div>
      <div className="items-center   justify-start flex  ">
      <Image src="/dance2.gif" width={150} height={150}className="md:block hidden md:w-[150px] w-[100px]"></Image>

      <Image src="/moneyfly2.gif" width={150} height={150}className="md:w-[150px] mx-4 w-[100px]"></Image>
      <Image src="/moneyfly2.gif" width={150} height={150}className="md:w-[150px] mx-4 w-[100px]"></Image>
      <Image src="/moneyfly2.gif" width={150} height={150}className="md:w-[150px] mx-4 w-[100px]"></Image>
      <Image src="/dance2.gif" width={150} height={150}className="md:block hidden md:w-[150px] w-[100px]"></Image>

      </div>
    
    
    </div>
  );
}
