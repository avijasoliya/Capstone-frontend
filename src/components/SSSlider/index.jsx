import { Slider } from "antd";
import clsx from "clsx";

export const SSSlider = ({
  defaultValue,
  disabled,
  onChange,
  min,
  max,
  className,
  tooltip = false,
  draggableTrack = true,
  value,
  ...rest
}) => {
  return (
    <Slider
      defaultValue={defaultValue}
      // disabled={disabled}
      onChange={onChange}
      min={min}
      max={max}
      tooltip={tooltip}
      className={clsx(className, "w-100")}
      draggableTrack={draggableTrack}
      value={value}
      {...rest}
    />
  );
};
