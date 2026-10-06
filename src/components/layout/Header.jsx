import { useState } from "react";
import { navLinks } from "../../assets/assets";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="section_header">
      <div className="content">
        <button
          type="button"
          className="burger"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9 9l6 6M15 9l-6 6" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
        <div className="header_icon">
          <img src="/icons/icon.png" alt="" />
          <h1>TakShop</h1>
        </div>
        <ul className={`header_list ${isOpen ? "is-open" : ""}`}>
          {navLinks.map((nav) => {
            return (
              <li key={nav.id}>
                <Link className="title" onClick={closeMenu} to={nav.path}>
                  {nav.label}
                </Link>
              </li>
            );
          })}
          <li className="mobile_only log_sign">
            <Link className="title" to="/auth" onClick={closeMenu}>
              Log in / Sign up
            </Link>
          </li>
          <li className="mobile_only">
            <Link className="title" to="/cart" onClick={closeMenu}>
              <img src="/icons/icon_basket.png" alt="" />
            </Link>
          </li>
        </ul>
        <div className="header_left">
          <div className="icon_search">
            <img src="/icons/icon_search.png" alt="" />
          </div>
          <div className="icon_mode">
            <img src="/icons/icon_mode.png" alt="" />
          </div>
          <button>log in/sign up</button>
          <div className="icon_basket">
            <img src="/icons/icon_basket.png" alt="" />
          </div>
        </div>
      </div>
      {isOpen && <div className="header_overlay" onClick={closeMenu} />}
    </div>
  );
}

export default Header;
