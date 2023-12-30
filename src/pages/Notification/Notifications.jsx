import NotificationCard from "./NotificationCard";
import FriendRequestCard from "./FriendRequestCard"

const Notifications = () => {
  return (
    <div className="flex flex-col h-[95vh] mx-3">
      <NotificationCard />
      <NotificationCard />
      <FriendRequestCard />
      <NotificationCard />
    </div>
  );
};

export default Notifications;
