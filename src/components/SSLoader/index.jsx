import { Icons } from "@/constants";
import styles from "./SSLoader.module.css";
import clsx from "clsx";

export const SSLoader = ({ className }) => {
  return (
    <>
      <div className={clsx(styles.loaderWrapper, className)}>
        <div className={styles.loaderIcon}>{Icons.HourglassDuotone}</div>
      </div>
    </>
  );
};
