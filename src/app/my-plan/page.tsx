import MyPlan from "@/components/myplan/MyPlan";

const MyPlanPage = () => {
  return (
    <section className="container mx-auto px-5">
      <div>
        <h1 className="text-white text-4xl">My Plan</h1>
        <p className="mt-3">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <MyPlan />
    </section>
  );
};

export default MyPlanPage;
