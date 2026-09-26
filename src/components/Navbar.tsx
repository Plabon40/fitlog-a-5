"use client";
import Link from "next/link";

import Image from "next/image";
import { inter, oswald } from "@/app/font";
import { useContext, useState } from "react";
import { WorkoutContext } from "@/context/ContextProvider";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { workouts, savedWorkouts } = useContext(WorkoutContext);
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/40 backdrop-blur-md">
      <div className="flex justify-between items-center py-3 text-white container mx-auto px-5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            <GiHamburgerMenu />
          </button>

          <div>
            <Link className="flex gap-2 items-center" href="/">
              <Image src="/logo.png" width={20} height={20} alt="logo" />
              <h1 className={oswald.className}>FITLOG</h1>
            </Link>
          </div>
        </div>
        <div>
          <ul className="hidden md:flex md:items-center md:justify-center  gap-2 text-[14px]">
            <li className="px-[10px] py-[2px] hover:bg-gray-900 rounded-[7px]">
              <Link href="/workout">Workout</Link>
            </li>

            <li className="px-[10px] py-[2px] hover:bg-gray-900 rounded-[7px]">
              <Link href="/my-plan">My Plan</Link>
            </li>
          </ul>
        </div>
        <div className="items-center">
          <ul className={`flex gap-2 text-[14px] ${inter.className}`}>
            <li className="px-[10px] py-[2px] hover:bg-gray-900 rounded-[7px]">
              <Link href="/my-plan">
                Plan{" "}
                <span className="text-black inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#C2F800]">
                  {workouts.length}
                </span>
              </Link>
            </li>

            <li className="px-[10px] py-[2px] hover:bg-gray-900 rounded-[7px]">
              <Link href="/my-plan">
                Save{" "}
                <span className="text-black inline-flex w-6 h-6 items-center justify-center rounded-full bg-[#C2F800]">
                  {savedWorkouts.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-5 py-4">
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <Link href="/workout" onClick={() => setMenuOpen(false)}>
                Workout
              </Link>
            </li>

            <li>
              <Link href="/my-plan" onClick={() => setMenuOpen(false)}>
                My Plan
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
