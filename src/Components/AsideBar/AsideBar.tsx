import "./AsideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlasses,
  faShirt,
  faHeadphones,
  faFootball,
  faGift,
  faMobile,
  faCar,
  faSpa,
  faHome,
  faCircleInfo,
  faPhone,
  faTruck,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type AsideBarPropsType = {
  visibality: boolean;
  visible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AsideBar({ visibality, visible }: AsideBarPropsType) {
  function Disable() {
    visible(false);
  }

  return (
    <aside
      className={visibality ? "mainAsideBar active" : "mainAsideBar disable"}
    >
      <ul className="NavLinks">
        <li>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/" onClick={Disable}>
            Home{" "}
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faSpa} />
          <Link to="/deals" onClick={Disable}>
            Today's Deals
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleInfo} />
          <Link to="/help" onClick={Disable}>
            Help
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          Conact
        </li>
        <li>
          <FontAwesomeIcon icon={faTruck} />
          <Link to="/TrackMyOrder" onClick={Disable}>
            Track My Order
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faRightToBracket} />
          <Link to="/LogIn" onClick={Disable}>
            log in{" "}
          </Link>
        </li>
        <h2>Categories</h2>
      </ul>
      <ul>
        <Link
          to={"/Categories"}
          state={{ CategoryName: "fashion" }}
          onClick={Disable}
        >
          <li>
            <FontAwesomeIcon icon={faShirt} />
            <h3>Fashion</h3>
          </li>
        </Link>
        <Link
          to={"/Categories"}
          state={{ CategoryName: "glasses" }}
          onClick={Disable}
        >
          <li>
            <FontAwesomeIcon icon={faGlasses} />
            <h3>Glasses</h3>
          </li>
        </Link>
        <Link
          to={"/Categories"}
          state={{ CategoryName: "headPhones" }}
          onClick={Disable}
        >
          <li>
            <FontAwesomeIcon icon={faHeadphones} />
            <h3>Headphones</h3>
          </li>
        </Link>
        <Link
          to={"/Categories"}
          state={{ CategoryName: "cars" }}
          onClick={Disable}
        >
          <li>
            <FontAwesomeIcon icon={faCar} />
            <h3>Cars</h3>
          </li>
        </Link>
        <Link
          to={"/Categories"}
          state={{ CategoryName: "watches" }}
          onClick={Disable}
        >
          <li>
            <FontAwesomeIcon icon={faGift} />
            <h3>Watches</h3>
          </li>
        </Link>
        <Link
          to={"/Categories"}
          state={{ CategoryName: "sports" }}
          onClick={Disable}
        >
          <li>
            <FontAwesomeIcon icon={faFootball} />
            <h3>Sports</h3>
          </li>
        </Link>
        <Link
          to={"/Categories"}
          state={{ CategoryName: "makeUp" }}
          onClick={Disable}
        >
          <li>
            <FontAwesomeIcon icon={faSpa} />
            <h3>make up</h3>
          </li>
        </Link>
        <Link
          to={"/Categories"}
          state={{ CategoryName: "mobilePhones" }}
          onClick={Disable}
        >
          <li>
            <FontAwesomeIcon icon={faMobile} className="mobileIcon" />
            <h3>Mobile Phones</h3>
          </li>
        </Link>
      </ul>
    </aside>
  );
}
