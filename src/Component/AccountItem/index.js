import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Account.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Account() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://hosongoisao.com/wp-content/uploads/2025/01/son-tung-mtp-17182382517241228747767.jpg"
        alt=""
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Bùi Tá Vũ</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("userName")}>Hoàng Vân Anh</span>
      </div>
    </div>
  );
}

export default Account;
