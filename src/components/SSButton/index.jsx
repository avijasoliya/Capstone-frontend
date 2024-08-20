import { Button } from "antd";
import clsx from "clsx";
import styles from "./SSButton.module.css";

export const SSButton = ({
  size,
  type,
  icon,
  className,
  children,
  onClick,
  variant,
  shape,
  isTableBtn,
  isEditBtn,
  isDangerBtn,
  isSuccessBtn,
  isSecondaryBtn,
  iconPosition,
  handleClick,
  onlyIcon,
  linkIcons,
  isLike,
  ...rest
}) => {
  return (
    <Button
      shape={shape}
      size={size}
      icon={icon}
      htmlType={type}
      type={variant}
      iconposition={iconPosition}
      onClick={handleClick}
      className={clsx(styles.Button, className, {
        [styles.iconsClass]: onlyIcon,
        [styles.likeClass]: linkIcons,
        [styles.like]: isLike === true,
      })}
      {...rest}
    >
      {children}
    </Button>
  );
};
