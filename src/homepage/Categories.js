import Container from "react-bootstrap/Container";
import "../assets/css/homepage.css";

function Categories() {
  const categories = [
    "Fruits & Vegetables",
    "Grocery",
    "Masala & Dry Fruits",
    "Sweet Cravings",
    "Frozen Food & Ice Creams",
    "Baby Food",
    "Dairy, Bread & Eggs",
    "Cold Drinks & Juices",
    "Snacks",
    "Meats, Fish & Eggs",
    "Breakfast & Sauces",
    "Tea, Coffee & More",
    "Biscuits",
    "Makeup & Beauty",
    "Bath & Body",
    "Cleaning Essentials",
    "Home Needs",
    "Electricals & Accessories",
    "Hygiene & Grooming",
    "Health & Baby Care",
    "Homegrown Brands",
    "Paan Corner",
  ];

  return (
    <section className="categories-section">
      <Container>
        <h2>Categories</h2>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <a href="#" key={index}>
              {category}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;
