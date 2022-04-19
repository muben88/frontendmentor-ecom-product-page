import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import userImg from "../assets/images/image-avatar.png";

function Header() {
  return (
    <div className="header">
      <div className="header-part">
        <div className="hamburger-menu">
          <img src={menuIcon} alt="menu icon" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="header-part">
        <div className="cart">
          <img src={cartIcon} alt="cart" />
        </div>
        <div className="user">
          <img src={userImg} alt="user account" />
        </div>
      </div>
    </div>
  );
}
export default Header;
