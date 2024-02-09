import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex space-x-4 bg-white rounded-lg p-10">
        <Image
          src="/images/nextjs.svg"
          alt="Next.js Logo"
          width={100}
          height={100}
        />
        <h1 className="text-black break-words">
          Welcome to my page links !
          </h1>
          
      </div>
    </div>
  );
}
