import { SSFooter, SSHeader, SSSidebar } from "@/components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Layout } from "antd";
import { Aside } from "../../hooks";
import clsx from "clsx";
import styles from "./DashboardLayout.module.css";

export const DashboardLayout = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Content } = Layout;

  const { currentPage } = Aside();
  return (
    <Layout className={styles.body}>
      <Layout className={styles.main}>
        <SSSidebar
          collapsed={collapsed}
          collapsedHandle={() => setCollapsed(!collapsed)}
          // mobileCollapsed={mobileCollapsed}
          // mobileCollapsedHandle={() => setMobileCollapsed(true)}
          items={items}
          defaultSelectedKeys={[currentPage]}
          selectedKeys={[currentPage]}
          // className={clsx(show === true ? styles.Sidebar : "")}
          className={clsx(styles.Sidebar)}
        />
        <Layout>
          <SSHeader
            collapsed={collapsed}
            collapseHandle={() => setCollapsed(!collapsed)}
            mobileShow={() => setShow(!show)}
            // show={show}
          />
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <SSFooter />
    </Layout>
  );
};
