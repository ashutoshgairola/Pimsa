const IncomeCard = () => {
    return (
        <div className="flex flex-col space-y-2 px-4 py-2 bg-red-400 rounded-lg w-3/5 relative ml-auto mt-4">
            <div className="absolute top-[-4px] right-[-15px] text-red-400 text-2xl">▶</div>
            <div className="flex justify-between items-center text-lg">
                <div className=" font-bold">₹ 5000</div>
                <div>Food</div>
            </div>
            <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="text-xs flex justify-between">
                <div>11/12/23</div>
                <div>11:40 pm</div>
            </div>
        </div>
    );
}

export default IncomeCard;