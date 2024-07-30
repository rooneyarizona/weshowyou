import { NavLink } from "react-router-dom"

//TODO: Add additional reports

function Administration() {
    return (
        <div>
            <h1>Administrator Reporting</h1>
            
            <NavLink to={"/getAllUsers"}>Get All Users</NavLink>
            
        </div>
    )
}

export default Administration
