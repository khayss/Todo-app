import logo from "/timely notes.png";
function Header() {
  return (
    <header>
        <div className="logo">
          <img src={logo} alt="timely logo" className="logo-img" />
          <h1>Timely</h1>
        </div>
        <div>
          <h1>Click</h1>
        </div>  
    </header>
  );
}

export default Header;
