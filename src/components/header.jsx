import "../styles/header.css"
import logo from "../assets/logo.png"
function Header() {
  return (
    <nav>
      <img src={logo} alt="logo ncr" />
    </nav>
  );
}

export default Header;