import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/header.css";

function RiceSection() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <section className="zepto-category-section">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="zepto-category-heading">Rice</h2>

          <a>
            See All
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>

        <div className="zepto-category-grid">
          {items.slice(0, 10).map((item) => (
            <div key={item.id} className="zepto-category-item">
              <div className="zepto-category-img-box">
                <img src={item.image} alt={item.title} />
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default RiceSection;
