import { useState } from 'react';

const SelectSlider = () => {
    const [selectedOption, setSelectedOption] = useState('Daily');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex justify-evenly mt-4 px-2 py-4 bg-[#93B1A7] rounded-lg">
            <div
                className={`py-2 px-3 rounded-lg option ${selectedOption === 'Daily' ? 'bg-white' : 'border-[1px] text-white border-gray-200'
                    } transition-bg duration-300 ease-in-out`}
                onClick={() => handleOptionClick('Daily')}
            >
                Daily
            </div>
            <div
                className={`py-2 px-3 rounded-lg option ${selectedOption === 'Weekly' ? 'bg-white' : 'border-[1px] text-white border-gray-200'
                    } transition-bg duration-300 ease-in-out`}
                onClick={() => handleOptionClick('Weekly')}
            >
                Weekly
            </div>
            <div
                className={`py-2 px-3 rounded-lg option ${selectedOption === 'Monthly' ? 'bg-white' : 'border-[1px] text-white border-gray-200'
                    } transition-bg duration-300 ease-in-out`}
                onClick={() => handleOptionClick('Monthly')}
            >
                Monthly
            </div>
            <div
                className={`py-2 px-3 rounded-lg option ${selectedOption === 'Yearly' ? 'bg-white' : 'border-[1px] text-white border-gray-200'
                    } transition-bg duration-300 ease-in-out`}
                onClick={() => handleOptionClick('Yearly')}
            >
                Yearly
            </div>
        </div>
    );
};

export default SelectSlider;
