const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src="/Icon.svg" alt="icon-holyways" className="icon" />
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
