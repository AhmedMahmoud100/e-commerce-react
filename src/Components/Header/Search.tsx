import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { itemsContext } from "../../context/CreateContext";
import "./Header.css";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export function Search() {
  const [array] = useContext(itemsContext);
  const [menu, setmenu] = useState<boolean>(false);
  const [category, setcategory] = useState("All");
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  function SearchValue() {
    setvalue("");
  }
  function SearchCategory(e: React.MouseEvent) {
    let target = e.target as HTMLInputElement;
    let name = target.getAttribute("data-name")!;
    setcategory(name);
    setmenu(false);
  }
  function HandleKeyPress(e: any) {
    if (e.charCode === 13) {
      navigate("./Search", { state: { category: category, search: value } });
    }
  }
  return (
    <header className="mainHeader">
      <h1>Bonik</h1>
      <section className="searchSection">
        <div className="custom-select">
          <h3 onClick={() => setmenu(!menu)}>{category}</h3>
          <ul className={menu ? "menu active" : " menu"}>
            <li onClick={SearchCategory} data-name="all">
              All
            </li>
            <li onClick={SearchCategory} data-name="fashion">
              Fashion
            </li>
            <li onClick={SearchCategory} data-name="glasses">
              Glasses
            </li>
            <li onClick={SearchCategory} data-name="headPhones">
              Headphones
            </li>
            <li onClick={SearchCategory} data-name="cars">
              Cars
            </li>
            <li onClick={SearchCategory} data-name="watches">
              Watches
            </li>
            <li onClick={SearchCategory} data-name="sports">
              Sports
            </li>
            <li onClick={SearchCategory} data-name="makeUp">
              Make up
            </li>
            <li onClick={SearchCategory} data-name="mobilePhones">
              Mobile phones
            </li>
          </ul>
        </div>
        <input
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          onKeyPress={HandleKeyPress}
          className="searchInput"
        ></input>
        <Link to={"/Search"} state={{ category: category, search: value }}>
          <FontAwesomeIcon
            icon={faSearch}
            className="searchIcon"
            onClick={SearchValue}
          />
        </Link>
      </section>
      <section className="icons">
        <FontAwesomeIcon icon={faUser} />
        <Link to="/store">
          <FontAwesomeIcon icon={faCartShopping} className="shoppingIcon" />
        </Link>
        <span className="items-number">{array!.length}</span>
      </section>
    </header>
  );
}
