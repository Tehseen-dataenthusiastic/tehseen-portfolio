import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";

export default function Navbar() {
  const goToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar-wrapper">

      <div className="navbar-glass">

        <div
        className="brand"
        onClick={goToHero}
        >
          <span>
            Tehseen Shaikh
            </span>
            </div>

        <nav className="nav-links">

          <a href="#about">About</a>

          <a href="#experience">
            Experience
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#achievements">
            Achievements
          </a>

          <a href="#contact" className="findme-btn">
            Find Me
          </a>

        </nav>

        <ThemeToggle />

      </div>

    </header>
  );
}