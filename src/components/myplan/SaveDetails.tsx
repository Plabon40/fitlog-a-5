import { Iworkout } from "@/type";
import React from "react";
import { FaFire, FaRegClock, FaStar, FaXmark } from "react-icons/fa6";
import Image from "next/image";

import ButtonSaved from "./Button/ButtonSaved";

const SaveDetails = ({ workout }: { workout: Iworkout }) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[#292d35] bg-[#191c22] p-4 text-white sm:p-5 lg:flex-row lg:items-center">
      <Image
        src={workout.image}
        alt={workout.name}
        width={195}
        height={130}
        className="h-[180px] w-full rounded-2xl object-cover sm:h-[200px] lg:h-[130px] lg:w-[195px]"
      />

      <div className="flex-1">
        <h1 className={` text-2xl`}>{workout.name}</h1>

        <p className="text-lg text-[#9CA3AF]">{workout.equipment}</p>

        <div className="mt-3 flex flex-wrap gap-5 text-base">
          <span className="flex items-center gap-2">
            <FaRegClock className="text-[#C2F800]" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-2">
            <FaFire className="text-[#C2F800]" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-2">
            <FaStar className="text-[#C2F800]" />
            {workout.rating}
          </span>
        </div>
      </div>

      <ButtonSaved workout={workout} />
    </div>
  );
};

export default SaveDetails;
