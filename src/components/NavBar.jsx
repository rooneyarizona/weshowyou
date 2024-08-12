import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";

/**
 * Navigation bar options. Can be scaled easily when new pages/features are added to application.
 * @returns Navigation bar options
 */

export default function NavBar() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const buttonStyle = (buttonName) => ({
    background: hoveredButton === buttonName ? "white" : "",
  });

  return (
    <div className="navbar-container">
      <div className="navbar-buttons">
        <button
          style={buttonStyle("Account")}
          onMouseEnter={() => handleMouseEnter("Account")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/account">Account</NavLink>
        </button>
        <button
          style={buttonStyle("Videos")}
          onMouseEnter={() => handleMouseEnter("Videos")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/videoGenres">Videos</NavLink>
        </button>

        <button
          style={buttonStyle("Upload")}
          onMouseEnter={() => handleMouseEnter("Upload")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/upload">Upload</NavLink>
        </button>

        <button
          style={buttonStyle("About Us")}
          onMouseEnter={() => handleMouseEnter("About Us")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/aboutUs">About Us</NavLink>
        </button>
        <button
          hidden={true}
          style={buttonStyle("TestPage")}
          onMouseEnter={() => handleMouseEnter("Test Page")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/testPage">Test Page</NavLink>
        </button>
        <button
          hidden={true}
          style={buttonStyle("Administration")}
          onMouseEnter={() => handleMouseEnter("Administration")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/adminLogin">Admin</NavLink>
        </button>
      </div>

      <SearchBox />
    </div>
  );
}
