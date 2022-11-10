import { useState } from "react";
import AsideBar from "../AsideBar/AsideBar";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  const [asideVisabilty, setasideVisabilty] = useState(false);

  return (
    <nav className="mainNav">
      <section
        className="part1"
        onClick={() => setasideVisabilty(!asideVisabilty)}
      >
        <h2>Categories</h2>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <AsideBar visibality={asideVisabilty} visible={setasideVisabilty} />
      <ul className="part2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/deals">Today's Deals</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>Conact</li>
        <li>
          <Link to="/TrackMyOrder">Track My Order</Link>
        </li>
        <li>
          <Link to="/LogIn">log in </Link>
        </li>
      </ul>
    </nav>
  );
}
