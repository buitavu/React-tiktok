import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  children,
  onClick,
  small = false,
  text = false,
  big = false,
  leftIcon,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  const classes = cx("wrapper", {
    primary,
    to,
    href,
    outline,
    small,
    text,
    big,
  });

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
