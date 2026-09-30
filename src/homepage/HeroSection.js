import logo from "../assets/icons/primary-logo.svg";
import "../assets/css/homepage.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ShoppingImage from "../assets/images/image.png";
import ShoppingImage2 from "../assets/images/zepto-card-image.png";
import Image from "react-bootstrap/Image";
import ShoppingPaanImage from "../assets/images/zepto-card-image-2.png";

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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeroSection() {
  const Features = ["Handling Fee", "Delivery Fee*", "Rain & Surge Fee"];
  return (
    <div className="zepto-hero-section">
      <Container>
        <Row>
          <Col>
            <div className="zepto-hero-content text-center pt-3">
              <p className="zepto-hero-title">
                ALL <span className="zepto-hero-title-purple">NEW ZEPTO</span>{" "}
                EXPERIENCE
              </p>

              <div className="zepto-badge-cards d-flex justify-content-between align-items-center">
                <div className="zepto-no-fee-card">
                  <Image src={ShoppingImage} alt="Zepto" height={80} />
                  <p className="mb-0 zepto-no-fee-card-text">₹0 FEES</p>
                </div>
                <div className="zepto-no-fee-card">
                  <Image src={ShoppingImage2} alt="Zepto" height={80} />
                  <p className="mb-0 zepto-low-price-card-text">
                    EVERYDAY LOW <span>PRICES</span>
                  </p>
                </div>
              </div>

              <div className="zepto-fee-list d-flex justify-content-between align-items-center">
                {Features.map((label) => (
                  <div key={label} className="zepto-fee-item">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="zepto-fee-check"
                    />
                    <span className="zepto-fee-text">₹0 {label}</span>
                  </div>
                ))}
              </div>
              <p className="zepto-fee-note">
                *T&C Apply. Above specific minimum order value
              </p>
            </div>
          </Col>
          <Col>
            <div className="zepto-hero-content-2 ">
              <div className="d-flex align-items-center justify-content-between">
                <div className="zepto-paan-text">
                  <p>PAAN CORNER</p>

                  <span>
                    Get smoking accessories, fresheners & more delivered in
                    minutes!
                  </span>

                  <button type="button" className="zepto-order-btn mt-3">
                    Order now
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                </div>

                <div>
                  <Image src={ShoppingPaanImage} alt="Zepto" height={200} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
