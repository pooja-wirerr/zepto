// import "./App.css";
import Header from "./homepage/Header";
import SubNav from "./homepage/SubNav";
import HeroSection from "./homepage/HeroSection";
import CategorySection from "./homepage/CategorySection";
import LaundrySection from "./homepage/LaundrySection";
import CleaningEssentials from "./homepage/CleaningEssentials";
import Categories from "./homepage/Categories";
import Cities from "./homepage/CitiesSection";
import Footer from "./homepage/Footer";

function App() {
  return (
    <div>
      <Header />
      <SubNav />
      <HeroSection />
      <CategorySection />
      <LaundrySection />
      <CleaningEssentials />
      <Categories />
      <Cities />
      <Footer />
    </div>
  );
}

export default App;
