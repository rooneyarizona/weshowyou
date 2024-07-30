//Header component to display page title and navigation bar
import { useUsers } from "../contexts/UsersContext";


export default function Header(){

    const {globalUserName} = useUsers();
    return(
        <div className="header"><img src="new-logo.jpg" alt="We Show You Logo" />
        <h3>{globalUserName}</h3>
        
        </div>
)
}