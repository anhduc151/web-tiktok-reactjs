import classNames from "classnames/bind";
import styles from "../AccountItem/AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/images/avatar.jpg";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img src={avatar} alt="Huyền" className={cx("avatar")}></img>
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Huyền chơi tiktok bị flop</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>huyen</span>
      </div>
    </div>
  );
}

export default AccountItem;
