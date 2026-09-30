import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCartShopping,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/homepage.css";

function CategorySection() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem,
        );
      }

      return [
        ...prevCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };


  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + change,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  
  const getQuantity = (id) => {
    const item = cart.find((cartItem) => cartItem.id === id);

    return item ? item.quantity : 0;
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="zepto-category-section">
      <Container>
      
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="zepto-category-heading">Shop by Category</h2>

          <a href="#" className="zepto-see-all">
            See All
            <FontAwesomeIcon icon={faAngleRight} className="ms-1" />
          </a>
        </div>

   
        <div className="text-end mb-3">
          <span className="cart-count">
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            Cart ({cartCount})
          </span>
        </div>

  
        <div className="zepto-category-grid">
          {items.map((item) => {
            const quantity = getQuantity(item.id);

            return (
              <div key={item.id} className="zepto-category-item">
            
                <div className="zepto-category-img-box">
                  <img src={item.image} alt={item.title} />
                </div>

                
                <p className="zepto-product-title">{item.title}</p>

             
                <p className="zepto-product-price">₹{item.price}</p>

            
                {quantity === 0 ? (
                  <Button
                    variant="success"
                    size="sm"
                    className="w-100"
                    onClick={() => addToCart(item)}
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                    Add to Cart
                  </Button>
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>

                   
                    <span className="fw-bold">{quantity}</span>

               
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default CategorySection;
