import './styles.css';
import 'bootstrap/js/src/collapse.js'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary nav-main">
      <div className="container-fluid nav-container">
        <a href="link" className="nav-main-text">
          <h3>Carros Top</h3>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrosTop-navbar"
          aria-controls="carrosTop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="carrosTop-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
