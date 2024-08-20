import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        hashed: true,
        token: {
          fontFamily: "var(--font-primary)",
          fontSize: 16,
          colorText: "#fff",
          colorPrimary: "#1db954",
          colorInfo: "#008000",
          colorSuccess: "#008000",
          colorError: "#ff0000",
          colorWarning: "#ffff00",
          colorPrimaryBgHover: "#1aa74c",
          colorPrimaryBorderHover: "#90e0a4",
          colorPrimaryHover: "#90e0a4",
          colorPrimaryActive: "#179443",
          colorPrimaryTextHover: "#179443",
          colorPrimaryTextActive: "#0d0d0d",
          colorPrimaryText: "#f7fdf9",
        },
        components: {
          Button: {
            borderRadius: 40,
            borderRadiusLG: 60,
            borderRadiusSM: 20,
            dangerShadow: "none",
            defaultShadow: "none",
            primaryShadow: "none",
            contentFontSize: 16,
            contentFontSizeLG: 18,
            contentFontSizeSM: 14,
            contentLineHeight: 1.5,
            paddingBlock: 12,
            paddingInline: 24,
            paddingBlockLG: 14,
            paddingInlineLG: 26,
            paddingInlineSM: 22,
            fontWeight: 500,
            motionEaseInOut: "linear",
            defaultColor: "var(--clr-primary)",
            defaultBorderColor: "var(--clr-primary)",
            defaultActiveColor: "var(--clr-white)",
            defaultActiveBorderColor: "var(--clr-primary-active)",
            colorPrimary: "var(--clr-primary)",
            dangerColor: "var(--clr-white)",
            colorBgTextActive: "var(--clr-white)",
            colorBgContainerDisabled: "var(--clr-dark-green-disable)",
            colorTextDisabled: "var(--clr-dark-green-disable)",
            borderColorDisabled: "var(--clr-dark-green-disable)",
            colorLink: "var(--clr-primary)",
            colorLinkHover: "var(--clr-gray-hover)",
            colorLinkActive: "var(--clr-primary-active)",
          },
          Layout: {
            siderBg: "var(--clr-aside)",
            headerBg: "var(--clr-black)",
            bodyBg: "var(--clr-black)",
            footerBg: "var(--clr-black)",
          },
          Menu: {
            colorBgContainer: "var(--clr-aside)",
            itemSelectedBg: "",
            itemMarginInline: "0",
            itemBorderRadius: "0",
            itemColor: "var(--clr-gray)",
            itemHoverColor: "var(--clr-primary)",
            itemActiveBg: "",
            itemSelectedColor: "var(--clr-primary)",
          },
          Breadcrumb: {
            itemColor: "var(--clr-gray-hover)",
            lastItemColor: "var(--clr-white)",
            linkColor: "var(--clr-gray-hover)",
            fontHeight: 1.5,
            fontSize: 14,
            marginXXS: 0,
            paddingXXS: 8,
          },
          Slider: {
            railBg: "var(--clr-white)",
            trackBg: "rgb(12, 138, 255)",
            railHoverBg: "red",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
