import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src="/Icon.svg" alt="icon-holyways" className="icon" />
      </Link>
      <div>
        <button className="loginbtn">
          <div className="login">Login</div>
        </button>
      </div>
      <div>
        <button className="registerbtn">
          <div className="register">Register</div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
