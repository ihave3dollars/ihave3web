import Image from "next/image";

export default function Memes() {
  return (
    <div className="min-h-screen py-12 justify-start items-center flex flex-col bg-flowers bg-cover w-screen">
        <div className="flex ">
      <div>
        <Image src="/greenbuy.gif" width={400} height={200}></Image>{" "}
        <Image src="/buygif.gif" width={400} height={200}></Image>
        <Image src="/orangebuy.gif" width={400} height={200}></Image>
        <Image src="/greenbuy.gif" width={400} height={200}></Image>
        <Image src="/buygif.gif" width={400} height={200}></Image>
        <Image src="/orangebuy.gif" width={400} height={200}></Image>
      
      </div>

      <Image
        src="/patrick.png"
        className="mt-8"
        width={350}
        height={400}
      ></Image>
       <div>
       <Image src="/buygif.gif" width={400} height={200}></Image>
        <Image src="/greenbuy.gif" width={400} height={200}></Image>{" "}  <Image src="/orangebuy.gif" width={400} height={200}></Image>
        <Image src="/buygif.gif" width={400} height={200}></Image>
        <Image src="/greenbuy.gif" width={400} height={200}></Image>
     
        <Image src="/orangebuy.gif" width={400} height={200}></Image>
      
      </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between">
      <Image className="mt-12" src="/lfg.gif" width={300} height={200}></Image>
      <Image className="mt-12" src="/make3.gif" width={800} height={200}></Image>
      <Image className="mt-12" src="/lfg.gif" width={300} height={200}></Image>

     </div>
     <div className="flex md:flex-row flex-col w-full items-center  justify-between px-12">
     <Image src="/21.jpeg" width={400} height={200} className="max-h-[300px]"></Image>
     <Image src="/18.jpg" width={400} height={200}className="min-h-[300px]"></Image>
     <Image src="/22.jpeg" width={400} height={200} className="min-h-[300px]"></Image>
     
     </div>
    </div>
  );
}
