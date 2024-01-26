
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-blue-100 rounded-md shadow-md bg-opacity-50">
      <div className="text-center">
        <img
          className="w-20 h-20 rounded-full mx-auto mb-4"
          src="piggy-bank.png"
          alt="Profile"
        />
        <h2 className="text-xl font-bold text-gray-800">Ashutosh</h2>
        <p className="text-sm text-gray-600">Financial Superhero</p>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <div className="text-lg font-semibold text-gray-800 mb-4">
            About Me
          </div>
          <div className="">
            <Link to="/edit-profile">
              <button className="text-pink-600  rounded focus:outline-none">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          I'm on a mission to conquer my financial goals and save the world, one
          budget at a time! When I'm not counting my pennies, you'll find me
          enjoying a cup of coffee or planning my next financial adventure.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <div className="text-lg font-semibold text-gray-800 mb-4">
            Latest Goals
          </div>
          <div className="">
            <Link to="/goals">
              <button className="text-purple-600  rounded focus:outline-none">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </Link>
          </div>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-600">
          <li>Save $500 for a new gadget 🚀</li>
          <li>Travel to a budget-friendly destination 🌍</li>
        </ul>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <div className="text-lg font-semibold text-gray-800 mb-4">
            Latest Achievements
          </div>
          <div className="">
            <Link to="/flex">
              <button className="text-yellow-600 rounded focus:outline-none">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </Link>
          </div>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-600">
          <li>Saved $1000 in one month! 💰</li>
          <li>Completed the "No-Spend" challenge like a champ!</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
