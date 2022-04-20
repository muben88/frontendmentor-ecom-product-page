import iconClose from "../../assets/images/icon-close.svg";

function DrawerMenu({ hideMenu }) {
  return (
    <div className="drawer">
      <div className="close-menu" onClick={hideMenu}>
        <img src={iconClose} alt="close menu" />
      </div>
      <div className="drawer-nav-links">
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
export default DrawerMenu;
