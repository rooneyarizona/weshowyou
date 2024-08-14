import { NavLink } from "react-router-dom";

/**
 * Page to provide about us navigation
 * @returns Buttons with navigation to relevent pages
 */

function AboutUs() {
  return (
    <>
      <h1>About Us 📖</h1>
      <div className="mainTextContent">
        <NavLink to={"/contactUs"}>
          <button className="paddedButton">Contact Us</button>
        </NavLink>

        <NavLink to={"/about"}>
          <button className="paddedButton">About Us</button>
        </NavLink>
      </div>
    </>
  );
}

export default AboutUs;
