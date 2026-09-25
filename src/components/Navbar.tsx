import Link from "next/link";

import Image from "next/image";
import { inter, oswald } from "@/app/font";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/40 backdrop-blur-md ">
      <div className=" flex justify-between items-center py-3 text-white container mx-auto px-5">
        <div>
          <Link className="flex gap-2 items-center" href="/">
            <Image src="/logo.png" width={20} height={20} alt="logo" />
            <h1 className={oswald.className}>FITLOG</h1>
          </Link>
        </div>

        <div>
          <ul className=" hidden md:flex gap-2 text-[14px]">
            <li className="px-[10px] py-[2px] hover:bg-gray-900 rounded-[7px]">
              <Link href="/workout">Workout</Link>
            </li>
            <li className="px-[10px] py-[2px] hover:bg-gray-900 rounded-[7px]">
              <Link href="/my-plan">My Plan</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className={`flex gap-2 text-[14px] ${inter.className}`}>
            <li className="px-[10px] py-[2px] hover:bg-gray-900 rounded-[7px]">
              <Link href="/workout">
                Plan{" "}
                <span className=" text-black inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#C2F800]">
                  0
                </span>
              </Link>
            </li>

            <li className="px-[10px] py-[2px] hover:bg-gray-900 rounded-[7px]">
              <Link href="/workout">
                Save{" "}
                <span className=" text-black inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#C2F800]">
                  0
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
