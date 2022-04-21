import logo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/icon-menu.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import userImg from "../../assets/images/image-avatar.png";
import DrawerMenu from "../snippets/DrawerMenu";
import Cart from "../snippets/Cart";
import { useState } from "react";

function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const showDrawerMenu = () => {
    setShowDrawer(true);
  };
  const hideDrawerMenu = () => {
    setShowDrawer(false);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="header">
      <div className="header-part">
        <div className="hamburger-menu" onClick={showDrawerMenu}>
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
        <div className="cart" onClick={toggleCart}>
          <img src={cartIcon} alt="cart" />
        </div>
        <div className="user">
          <img src={userImg} alt="user account" />
        </div>
      </div>
      {showDrawer && (
        <>
          <div className="drawer-darken-bg"></div>
          <DrawerMenu hideMenu={hideDrawerMenu} />
        </>
      )}
      {showCart && <Cart />}
    </div>
  );
}
export default Header;
