import { inter, oswald } from "@/app/font";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto px-5 ]">
      <div className="min-h-[595px] rounded-2xl border border-[#292d35] bg-[#191c22]">
        <div className="hero h-full">
          <div className="hero-content w-full flex-col gap-8 px-8 py-10 lg:flex-row-reverse lg:justify-between lg:px-14">
            <div className="flex shrink-0 items-center justify-center lg:w-[48%]">
              <Image
                src="/banner.png"
                width={500}
                height={500}
                alt="Workout illustration"
                className="w-[400px] object-contain lg:w-[500px]"
              />
            </div>

            <div className="max-w-[600px] space-y-6 lg:w-[52%]">
              <span
                className={` ${oswald.className} text-sm font-medium text-[#C2F800]`}
              >
                WORKOUT LIBRARY
              </span>

              <h1
                className={`text-4xl  leading-[1.15] text-[#E5E7EB] sm:text-5xl lg:text-[60px] ${oswald.className}`}
              >
                TRAIN WITH INTENT. LOG EVERY SET.
              </h1>

              <p
                className={`max-w-[550px] ${inter.className}  text-[17px] leading-7 text-[#9CA3AF]`}
              >
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today's plan, and watch the week's work add up.
              </p>

              <button className="mt-4 rounded-3xl bg-[#C2F800] px-6 py-3 font-semibold text-black hover:bg-[#b8ed00]">
                BROWSE WORKOUTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
