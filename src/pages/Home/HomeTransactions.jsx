import IncomeCard from "../../components/IncomeCard"
import SpentCard from "../../components/SpentCard"

const HomeTransactions = () => {
    return (
      <div className="flex-grow flex flex-col-reverse space-y-4 my-4 overflow-y-auto px-4 " >
        <IncomeCard />
        <IncomeCard />
        <SpentCard />
        <IncomeCard />
        <SpentCard />
        <IncomeCard />
        <SpentCard />
        <IncomeCard />
        <SpentCard />
      </div>
    );
  }
  
  export default HomeTransactions;
  