import { NavLink } from "react-router-dom"


function AboutUs() {
    return (
        <div>
            
            <NavLink to={"/contactUs"}><h1>Contact Us</h1></NavLink>
            <NavLink to={"/about"}><h1>About WeShowYou</h1></NavLink>
        </div>
        
)}

export default AboutUs
