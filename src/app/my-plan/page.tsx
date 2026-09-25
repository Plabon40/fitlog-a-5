import React from "react";

const MyPlanPage = () => {
  return (
    <section className="container mx-auto px-5">
      <div>
        <h1 className="text-white text-4xl">My Plan</h1>
        <p className="mt-3">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      {/* stat */}
      <div className=" mt-7 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#191c22]">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Exercises */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Exercises</p>
            <h2 className="mt-2 text-4xl font-bold text-[#c8ff00]">2</h2>
          </div>

          {/* Minutes */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Minutes</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-100">27</h2>
          </div>

          {/* Calories */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Calories</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-100">200</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
