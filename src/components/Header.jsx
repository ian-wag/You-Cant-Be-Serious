import styles from "./Header.module.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/" className={styles.logo}>
          YC
          <span style={{ fontWeight: "bold" }}>BS</span>
        </Link>
        <div>
          <NavLink
            to="/donate"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "rgb(255, 105, 180)",
                    fontWeight: "bold"
                  }
                : {}
            }
            className={styles.links}
          >
            Donate
          </NavLink>
          <NavLink
            to="/info"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "rgb(255, 105, 180)",
                    fontWeight: "bold"
                  }
                : {}
            }
            className={styles.links}
          >
            Info
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
