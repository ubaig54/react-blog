import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/login">Login</Link>
      &nbsp;
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Header;
