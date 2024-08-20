import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/layouts";
import { mainDashboard } from "@/constants";

/*  Pages Loading */
import StyleGuide from "@/pages/styleguide";
import Dashborad from "@/pages/Dashboard";
import SearchMusic from "@/pages/SearchMusic";
import Playlists from "@/pages/Playlists";

export const DashboardRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <DashboardLayout items={mainDashboard} />,
        children: [
          {
            index: true,
            element: <Dashborad />,
          },
          {
            path: "browse-music",
            element: <SearchMusic />,
          },
          {
            path: "pricing",
            element: <>Coming Soon</>,
          },
          {
            path: "playlists",
            element: <Playlists />,
          },
          {
            path: "my-cart",
            element: <>Coming Soon</>,
          },
          {
            path: "styleguide",
            element: <StyleGuide />,
          },
          {
            path: "*",
            element: <>Coming Soon</>,
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <>Login</>,
          },
          {
            path: "register",
            element: <>Register</>,
          },
        ],
      },
    ],
  },
]);
