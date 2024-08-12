import { NavLink } from 'react-router-dom';
import { useUsers } from '../contexts/UsersContext';



function Logout() {

    const {setGlobalUserName} = useUsers();
    
    return (
        <div>
            {setGlobalUserName(null)};
            <h1>You have successfull been logged out</h1>
            <NavLink to={"/videoGenres"}><p>Back to Videos</p></NavLink>
        </div>
    )
}

export default Logout;
