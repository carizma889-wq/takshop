import { useState, useRef, useEffect } from "react";
import { navLinks } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import useTheme from "../../hooks/useTheme";
function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const megaRef = useRef(null);
  const searchInputRef = useRef(null);

  const closeAll = () => {
    setIsOpen(false);
    setIsMegaOpen(false);
    setIsSearchOpen(false);
  };
  const toggleBurger = () => {
    setIsOpen((open) => !open);
    setIsMegaOpen(false);
    setIsSearchOpen(false);
  };
  const toggleSearch = () => {
    setIsSearchOpen((open) => !open);
    setIsMegaOpen(false);
    setIsOpen(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const term = query.trim();
    if (!term) return;
    navigate(`/store?search=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
    setQuery("");
  };

  useEffect(() => {
    if (!isMegaOpen) return;

    const handleClickOutside = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setIsMegaOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMegaOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMegaOpen]);

  useEffect(() => {
    if (!isSearchOpen) return;
    searchInputRef.current?.focus();

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSearchOpen]);

  return (
    <div className="section_header">
      <div className="content">
        <button
          type="button"
          className="burger"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={toggleBurger}
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
          {navLinks.map((nav) =>
            nav.hasMegaMenu ? (
              <li
                key={nav.id}
                ref={megaRef}
                className={`has_mega ${isMegaOpen ? "is-active" : ""}`}
              >
                <button
                  type="button"
                  className="title mega_toggle"
                  aria-expanded={isMegaOpen}
                  onClick={() => setIsMegaOpen(!isMegaOpen)}
                >
                  {nav.label}
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isMegaOpen && <MegaMenu onNavigate={closeAll} />}
              </li>
            ) : (
              <li key={nav.id}>
                <Link className="title" to={nav.path} onClick={closeAll}>
                  {nav.label}
                </Link>
              </li>
            ),
          )}
          <li className="mobile_only log_sign">
            <Link className="title" to="/auth" onClick={closeAll}>
              Log in / Sign up
            </Link>
          </li>
          <li className="mobile_only">
            <Link className="title" to="/cart" onClick={closeAll}>
              <img src="/icons/icon_basket.png" alt="" />
            </Link>
          </li>
        </ul>
        <div className="header_left">
          <button
            type="button"
            className="icon_search"
            aria-label="Search"
            aria-expanded={isSearchOpen}
            onClick={toggleSearch}
          >
            <img src="/icons/icon_search.png" alt="" />
          </button>
          <div className="icon_mode">
          <button
  type="button"
  className="icon_mode"
  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
  onClick={toggleTheme}
>
  <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="var(--color-primary)" />
    {theme === "dark" ? (
      <g
        transform="translate(11 11) scale(0.75)"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </g>
    ) : (
      <path
        transform="translate(11 11) scale(0.75)"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="#fff"
      />
    )}
  </svg>
</button>
          </div>
          <button type="button" className="btn_login">
            log in/sign up
          </button>
          <div className="icon_basket">
            <img src="/icons/icon_basket.png" alt="" />
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <form className="search_bar" role="search" onSubmit={handleSearch}>
          <input
            ref={searchInputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            aria-label="Search for products"
          />
          <button type="submit" className="search_submit">
            Search
          </button>
          <button
            type="button"
            className="search_close"
            aria-label="Close search"
            onClick={() => setIsSearchOpen(false)}
          >
            ×
          </button>
        </form>
      )}

      {isOpen && <div className="header_overlay" onClick={closeAll} />}
    </div>
  );
}

export default Header;