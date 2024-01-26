import DoughnutGraph from "./DoughnutGraph";
import SelectSlider from "./SelectSlider";
import Header from "./Header";

const Insights = () => {
  return (
    <div className="flex flex-col h-[95vh] space-y-4 mx-3">
     <SelectSlider />
      <Header />
      <DoughnutGraph />
    </div>
  );
};

export default Insights;
