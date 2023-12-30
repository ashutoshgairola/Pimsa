import IncomeCard from "./IncomeCard"
import SpentCard from "./SpentCard"

const HomeTransactions = () => {
    return (
      <div className="flex-grow flex flex-col-reverse  my-4 overflow-y-auto px-4 " >
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
  