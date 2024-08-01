import { NavLink } from "react-router-dom"
import { useUsers } from "../contexts/UsersContext"

//TODO: Add additional reports

function Administration() {

    const {adminUsername} = useUsers("");
    return (
        <div>
            <h1>Administrator Reporting</h1>
            
            
            <div><NavLink to={"/getAllUsers"}>Get All Users</NavLink></div>
            <div><NavLink to={"/getAllVideos"}>Get All Videos</NavLink></div>
            
        </div>
    )
}

export default Administration
