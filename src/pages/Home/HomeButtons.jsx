import { useState } from "react";

const HomeButton = () => {
    const [check, setCheck] = useState(0);
    return (
        <div className="mx-4  border-[1px] rounded-lg border-[#3c4b49] bg-[#3c4b4922] p-4 mb-3   font-semibold">
            {check == 0 && <div className="flex justify-evenly">
                <button onClick={() => setCheck(1)} className="text-white text-xl px-4 py-1 bg-[#8fbca5] rounded-lg">Income ⬆</button>
                <button onClick={() => setCheck(2)} className="text-white text-xl px-4 py-1 bg-[#e97a7a] rounded-lg">Spent ⬇</button>
            </div>}

            {check != 0 && <div className="flex flex-col space-y-2 ">
                <div className="flex space-x-3 items-center">
                    <input className="p-2 rounded-lg w-1/2" type="number" placeholder="₹ Amount" />
                    <div className="p-2 bg-white rounded-lg">₹200</div>
                    <div className="p-2 bg-white rounded-lg">₹40000</div>
                </div>
                {
                    check == 2 && <div className="grid grid-cols-4 gap-3 text-center">
                        <div className="p-2 bg-white rounded-lg">🥰</div>
                        <div className="p-2 bg-white rounded-lg">😇</div>
                        <div className="p-2 bg-white rounded-lg">🥰</div>
                        <div className="p-2 bg-white rounded-lg">😇</div>
                        <div className="p-2 bg-white rounded-lg">🥰</div>
                        <div className="p-2 bg-white rounded-lg">😇</div>
                    </div>
                }
                <div className="flex space-x-4">
                    <textarea className="flex-grow p-2 rounded-lg" name="" placeholder="Description"></textarea>
                    {
                        check == 1 && <button onClick={() => setCheck(0)} className="px-3 bg-slate-500 text-white rounded-lg text-2xl"> <i className="fa-solid fa-hand-holding-dollar"></i></button>
                    }
                    <button onClick={() => setCheck(0)} className="px-3 bg-slate-500 text-white rounded-lg text-2xl"> ⬆</button>
                </div>
            </div>
            }
        </div>
    );
}

export default HomeButton