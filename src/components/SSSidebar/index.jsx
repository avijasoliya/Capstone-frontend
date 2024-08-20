import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import clsx from "clsx";
const { Sider } = Layout;
import { Logo } from "@/assets/images";
import styles from "./SSSidebar.module.css";

export const SSSidebar = ({
  items,
  className,
  defaultSelectedKeys,
  selectedKeys,
}) => {
  return (
    <Sider
      trigger={null}
      collapsible
      className={clsx(styles.sider, className, "openSider")}
      width="var(--sidebar-width)"
    >
      <Link to="/" className={clsx(styles.logo, "d-inline-block")}>
        <img src={Logo} alt="Logo" className="w-100 h-100 object-fit-contain" />
      </Link>

      <Menu
        mode="inline"
        className={clsx(styles.menu, "border-0")}
        defaultSelectedKeys={defaultSelectedKeys}
        selectedKeys={selectedKeys}
        items={items}
      />
    </Sider>
  );
};
