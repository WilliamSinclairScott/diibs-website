import "./Navbar.css";

const Navbar = () => {
  return(
    <div className="navbar">
      <img 
      src="https://images.squarespace-cdn.com/content/v1/661043c4a62d407aa7d2daf8/39204b38-a4ce-4095-ab46-7cec4e8cc5d7/DIIBS_logo_black.png?format=1500w" 
      alt="logo"
      className="logo"
      />
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/venues">Venues</a>
      </nav>
    </div>
  );
}

export default Navbar;