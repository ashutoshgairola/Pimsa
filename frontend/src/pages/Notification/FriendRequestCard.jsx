const FriendRequestCard = () => {
  return (
    <div className="bg-pink-100 border-l-4 border-pink-500 p-4 mb-4 rounded-md shadow-md bg-opacity-50 first:mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-6 text-xl text-center">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="ml-3">
            <div className="flex justify-between items-center">
              <div className="leading-5 font-medium text-gray-900">
                New Friend Request
              </div>
              <div className="flex space-x-2 ">
                <button className="bg-green-300  text-white p-1 rounded focus:outline-none">
                  ✔️
                </button>
                <button className="bg-red-300  text-white p-1 rounded focus:outline-none">
                  ✖️
                </button>
              </div>
            </div>

            <div className="mt-1 text-sm leading-5 text-gray-600">
              Someone wants to be your financial buddy! Accept the request and
              make your money journey even more enjoyable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestCard;
