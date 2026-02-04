import Bookmarks from "../pages/Bookmarks";
import Explore from "../pages/Explore";
import HomePage from "../pages/homePage";
import Lists from "../pages/Lists";
import Messages from "../pages/Message";
import More from "../pages/More";
import Notification from "../pages/Notification";
import Profile from "../pages/Profile";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/explore",
    element: <Explore />,
  },
  {
    id: 3,
    path: "/notif",
    element: <Notification />,
  },
  {
    id: 4,
    path: "/message",
    element: <Messages />,
  },
  {
    id: 5,
    path: "/bookmark",
    element: <Bookmarks />,
  },
  {
    id: 6,
    path: "/lists",
    element: <Lists />,
  },
  {
    id: 7,
    path: "/profile",
    element: <Profile />,
  },
  {
    id: 8,
    path: "/more",
    element: <More />,
  },
];
