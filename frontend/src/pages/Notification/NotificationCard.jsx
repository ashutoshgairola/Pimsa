const NotificationCard = () => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4 rounded-md shadow-md  bg-opacity-40 first:mt-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <img className="w-6" src="piggy-bank.png" alt="piggy" />
        </div>
        <div className="ml-3">
          <div className="text-sm leading-5 font-medium text-gray-900">
            New Notification
          </div>
          <div className="mt-1 text-sm leading-5 text-gray-600">
            Just wanted to remind you that budgeting is cheaper than therapy!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
