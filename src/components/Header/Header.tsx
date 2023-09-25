import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header_container">
      <FontAwesomeIcon icon={faSackDollar} color="#7AF1a7" size="2x" />
      <h2>My Finances</h2>
    </header>
  );
};

export default Header;
