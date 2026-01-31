import "./Navbar.css";
import logos from "../../../public/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav__left">
          <Link to="/">
            <img className="logo__brand" src={logos} alt="" />
          </Link>
          <Link to="/">
            <h1>Target It school</h1>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
