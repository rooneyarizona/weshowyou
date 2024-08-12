import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>
        <center>😬</center>
      </h1>
      <h1>
        Whoopsies! Looks like you are trying to access a page that does not
        exist! Please let us know by completing the form at the{" "}
        <NavLink to={"/contactUs"}>Contact Us</NavLink> page!
      </h1>
    </div>
  );
}

export default PageNotFound;
