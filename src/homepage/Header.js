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

function Header() {
  const [active, setActive] = useState("All");

  return (
    <header className="zepto-header">
      <Navbar expand="md" className="zepto-navbar">
        <Container fluid className="zepto-container">
          <Navbar.Brand href="#home" className="zepto-brand">
            <img src={logo} alt="Zepto" height="40" />
          </Navbar.Brand>

          <div className="zepto-delivery">
            <div className="zepto-delivery-title">
              <FontAwesomeIcon icon={faBoltLightning} />
              <span>Delivery in minutes*</span>
            </div>
            <button type="button" className="zepto-location">
              Select Location
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>

          <form className="zepto-search" role="search">
            <FontAwesomeIcon icon={faAngleDown} />
            <input
              type="text"
              placeholder='Search for "amul butter"'
              aria-label="Search"
            />
          </form>

          <div className="zepto-actions">
            <a className="zepto-action">
              <FontAwesomeIcon icon={faCircleUser} size="xl" />
              <span>Login</span>
            </a>
            <a className="zepto-action">
              <FontAwesomeIcon icon={faCartShopping} size="xl" />
              <span>Cart</span>
            </a>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
