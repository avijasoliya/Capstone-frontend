import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./SSTitle.module.css";

export const SSTitle = ({ href, content, title }) => {
  return (
    <div
      className={clsx(
        styles.title,
        "d-flex align-content-center justify-content-between"
      )}
    >
      <h3 className="text-capitalize">{title}</h3>
      <Link to={href} className="align-self-center">
        {content}
      </Link>
    </div>
  );
};
