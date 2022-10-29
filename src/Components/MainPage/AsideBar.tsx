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
    <aside className={visibality ? "active" : "disable"}>
      <Link
        to={"/Categories"}
        state={{ CategoryName: "fashion" }}
        onClick={Disable}
      >
        <figure>
          <FontAwesomeIcon icon={faShirt} />
          <h3>Fashion</h3>
        </figure>
      </Link>
      <Link
        to={"/Categories"}
        state={{ CategoryName: "glasses" }}
        onClick={Disable}
      >
        <figure>
          <FontAwesomeIcon icon={faGlasses} />
          <h3>Glasses</h3>
        </figure>
      </Link>
      <Link
        to={"/Categories"}
        state={{ CategoryName: "headPhones" }}
        onClick={Disable}
      >
        <figure>
          <FontAwesomeIcon icon={faHeadphones} />
          <h3>Headphones</h3>
        </figure>
      </Link>
      <Link
        to={"/Categories"}
        state={{ CategoryName: "cars" }}
        onClick={Disable}
      >
        <figure>
          <FontAwesomeIcon icon={faCar} />
          <h3>Cars</h3>
        </figure>
      </Link>
      <Link
        to={"/Categories"}
        state={{ CategoryName: "watches" }}
        onClick={Disable}
      >
        <figure>
          <FontAwesomeIcon icon={faGift} />
          <h3>Watches</h3>
        </figure>
      </Link>
      <Link
        to={"/Categories"}
        state={{ CategoryName: "sports" }}
        onClick={Disable}
      >
        <figure>
          <FontAwesomeIcon icon={faFootball} />
          <h3>Sports</h3>
        </figure>
      </Link>
      <Link
        to={"/Categories"}
        state={{ CategoryName: "makeUp" }}
        onClick={Disable}
      >
        <figure>
          <FontAwesomeIcon icon={faSpa} />
          <h3>make up</h3>
        </figure>
      </Link>
      <Link
        to={"/Categories"}
        state={{ CategoryName: "mobilePhones" }}
        onClick={Disable}
      >
        <figure>
          <FontAwesomeIcon icon={faMobile} className="mobileIcon" />
          <h3>Mobile Phones</h3>
        </figure>
      </Link>
    </aside>
  );
}
