import logo from "../assets/icons/primary-logo.svg";
import "../assets/css/homepage.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faBagShopping,
  faMugHot,
  faCouch,
  faPuzzlePiece,
  faAppleWhole,
  faHeadphones,
  faMobileScreenButton,
  faSprayCan,
  faShirt,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const categories = [
  { name: "All", icon: faBagShopping },
  { name: "Cafe", icon: faMugHot },
  { name: "Home", icon: faCouch },
  { name: "Toys", icon: faPuzzlePiece },
  { name: "Fresh", icon: faAppleWhole },
  { name: "Electronics", icon: faHeadphones },
  { name: "Mobiles", icon: faMobileScreenButton },
  { name: "Beauty", icon: faSprayCan },
  { name: "Fashion", icon: faShirt },
  { name: "Pharmacy", icon: faKitMedical },
];

function SubNav() {
  const [active, setActive] = useState("All");

  return (
    <header className="zepto-header">
      <nav className="zepto-subnav" aria-label="Categories">
        <ul className="zepto-subnav-list">
          {categories.map(({ name, icon }) => (
            <li key={name}>
              <a
                href={`#${name.toLowerCase()}`}
                className={`zepto-subnav-item${active === name ? " active" : ""}`}
                onClick={() => setActive(name)}
              >
                <FontAwesomeIcon icon={icon} />
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default SubNav;
