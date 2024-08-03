import { NavLink } from "react-router-dom";

function AboutUs() {
  return (
    <div className="mainTextContent">
      <p className="pageLinks">
        <NavLink to={"/contactUs"}>
          <h1>Contact Us</h1>
        </NavLink>
      </p>
      <p className="pageLinks">
        <NavLink to={"/about"}>
          <h1>About Us</h1>
        </NavLink>
      </p>
    </div>
  );
}

export default AboutUs;
