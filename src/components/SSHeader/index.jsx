import { useState } from "react";
import clsx from "clsx";
import { SSButton, SSBreadcrumb } from "@/components";
import { Layout } from "antd";
import { Icons } from "@/constants";
import styles from "./SSHeader.module.css";

const { Header } = Layout;
export const SSHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive((prevState) => {
      const newState = !prevState;
      if (newState) {
        document.body.classList.add("navBarOpen");
        document.documentElement.setAttribute("data-sidebar-show", "true");
      } else {
        document.body.classList.remove("navBarOpen");
        document.documentElement.setAttribute("data-sidebar-show", "false");
      }
      return newState;
    });
  };

  return (
    <Header className={clsx(styles.header, "d-grid")}>
      <div
        className={clsx(
          styles.headerLeft,
          "d-flex align-items-center justify-content-start"
        )}
      >
        <SSButton
          variant="primary"
          onlyIcon={true}
          shape={"square"}
          className={clsx("z-3 hamburger")}
          handleClick={toggleSidebar}
          icon={
            <svg
              className="w-100 h-100"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
            >
              <path
                className="line"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              ></path>
              <path className="line" d="M 20,50 H 80"></path>
              <path
                className="line"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              ></path>
            </svg>
          }
        />
        <SSButton
          variant="default"
          onlyIcon={true}
          disabled
          icon={Icons.AltArrowLeft}
          shape={"square"}
        />
        <SSBreadcrumb items={[{ title: "Home" }]} />
      </div>
      <div></div>
      <div></div>
    </Header>
  );
};
