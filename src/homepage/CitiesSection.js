import Container from "react-bootstrap/Container";
import "../assets/css/header.css";

function Cities() {
  const cities = [
    "Agra",
    "Ahmedabad",
    "Ambala",
    "Amritsar",
    "Bareilly",
    "Belgaavi",
    "Bengaluru",
    "Bhiwadi",
    "Chandigarh",
    "Chhatrapati Sambhaji Nagar",
    "Chennai",
    "Coimbatore",
    "Davanagere",
    "Dehradun",
    "Delhi",
    "Faridabad",
    "Ghaziabad",
    "Gorakhpur",
    "Guntur",
    "Gurugram",
    "Hapur",
    "Haridwar",
    "Hisar",
    "Hosur",
    "Hubballi",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Jalandhar",
    "Kanpur",
    "Karimnagar",
    "Karnal",
    "Kochi",
    "Kolkata",
    "Kota",
    "Kurukshetra",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Meerut",
    "Mehsana",
    "Mumbai",
    "Mysuru",
    "Nagpur",
    "Nashik",
    "Noida",
    "Palakkad",
    "Panchkula",
    "Panipat",
    "Patiala",
    "Prayagraj",
    "Puducherry",
    "Pune",
    "Rajkot",
    "Rewari",
    "Saharanpur",
    "SAS Nagar",
    "Sonipat",
    "Surat",
    "Tumkuru",
    "Udaipur",
    "Vadodara",
    "Valsad",
    "Varanasi",
    "Vellore",
    "Vijayawada",
    "Warangal",
  ];

  return (
    <section className="cities-section">
      <Container>
        <h2>Cities</h2>

        <div className="cities-list">
          {cities.map((city, index) => (
            <span key={city}>
              <a href="#">{city}</a>

              {index !== cities.length - 1 && (
                <span className="separator"> | </span>
              )}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Cities;
