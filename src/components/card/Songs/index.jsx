import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Songs.module.css";

export const Songs = ({
  name,
  title,
  link,
  data,
  img,
  alt,
  artist,
  handleChangeSong,
}) => {
  return (
    <div className={clsx(styles.card, "position-relative overflow-hidden")}>
      {/* <div className="position-absolute">
        <SSButton onlyIcon className={""} />
      </div> */}
      <div onClick={() => handleChangeSong(data)}>
        <div
          className={clsx(
            styles.imgWrapper,
            artist && "rounded-circle",
            "ratio ratio-1x1"
          )}
        >
          <img src={img} alt={alt} />
        </div>
        <div className={clsx(styles.cardContent, "d-flex flex-column")}>
          <h6 className="fw-semibold lh-sm clr-white text-ellipsis line-clamp-1">
            {name}
          </h6>
          <p className="h6 fw-normal lh-base clr-gray-active text-ellipsis line-clamp-2">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
