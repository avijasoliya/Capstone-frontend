import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Aside = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("/");
        break;
      case "/browse-music":
        setCurrentPage("/browse-music");
        break;
      case "/pricing":
        setCurrentPage("/pricing");
        break;
      case "/playlists":
        setCurrentPage("/playlists");
        break;
      case "/my-cart":
        setCurrentPage("/my-cart");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return { currentPage };
};
