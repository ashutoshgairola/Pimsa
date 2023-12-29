import HomeButton from "./HomeButtons";
import HomeTransactions from "./HomeTransactions";

const Home = () => {
  return (
    <div className="flex flex-col h-[95vh] ">
      <HomeTransactions />
      <HomeButton />
    </div>
  );
};

export default Home;
