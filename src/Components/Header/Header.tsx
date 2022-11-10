import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { itemsContext } from "../../context/CreateContext";
import AsideBar from "../AsideBar/AsideBar";
import "./Header.css";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [array] = useContext(itemsContext);
  const [menu, setmenu] = useState<boolean>(false);
  const [category, setcategory] = useState("All");
  const [value, setvalue] = useState("");
  const navigate = useNavigate();
  const [asideVisabilty, setasideVisabilty] = useState(false);

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
      setvalue("");
    }
  }

  return (
    <>
      <header className="mainHeader">
        <h1>Bonik</h1>
        <div className="part2">
          <section
            className="part1"
            onClick={() => setasideVisabilty(!asideVisabilty)}
          >
            <span></span>
            <span></span>
            <span></span>
          </section>
          <section className="searchSection">
            <div className="custom-select">
              <h3 onClick={() => setmenu(!menu)}>{category}</h3>
              <ul className={menu ? "menu active" : " menu"}>
                <li onClick={SearchCategory} data-name="All">
                  All
                </li>
                <li onClick={SearchCategory} data-name="Fashion">
                  Fashion
                </li>
                <li onClick={SearchCategory} data-name="Glasses">
                  Glasses
                </li>
                <li onClick={SearchCategory} data-name="HeadPhones">
                  Headphones
                </li>
                <li onClick={SearchCategory} data-name="Cars">
                  Cars
                </li>
                <li onClick={SearchCategory} data-name="Watches">
                  Watches
                </li>
                <li onClick={SearchCategory} data-name="Sports">
                  Sports
                </li>
                <li onClick={SearchCategory} data-name="MakeUp">
                  Make up
                </li>
                <li onClick={SearchCategory} data-name="MobilePhones">
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
        </div>

        <section className="icons">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/store">
            <FontAwesomeIcon icon={faCartShopping} className="shoppingIcon" />
          </Link>
          <span className="items-number">{array!.length}</span>
        </section>
      </header>
      <AsideBar visibality={asideVisabilty} visible={setasideVisabilty} />
    </>
  );
}
