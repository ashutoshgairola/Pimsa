const Header = () => {
    return (
        <div className="flex flex-col space-y-6 bg-[#93B1A7] p-2 rounded-lg">
            <div className="text-lg font-semibold text-white">
                Your day looks good. Cha-ching 🤑
            </div>
            <div className="flex justify-evenly items-center p-2 bg-[#7a918d85] rounded-lg">
                <div className=" flex flex-col bg-white space-y-2 rounded-lg p-2 text-center ">
                    <div>Earned</div>
                    <div>₹40000</div>
                </div>
                <div className="text-2xl font-bold text-white">−</div>
                <div className="flex flex-col bg-white space-y-2 rounded-lg p-2 text-center">
                    <div>Spents</div>
                    <div>₹20000</div>
                </div>
                <div className="text-2xl font-bold text-white">=</div>
                <div className="flex flex-col bg-white space-y-2 rounded-lg p-2 text-center items-center">
                    <img className="w-6" src="piggy-bank.png" alt="" />
                    <div>₹20000</div>
                </div>
            </div>
        </div>
    );
}

export default Header;