import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { VideosProvider} from "../contexts/VideosContext";
import { UsersProvider } from "../contexts/UsersContext";


function Layout() {
  

  return (
    <div>
      <UsersProvider>
      <VideosProvider>
      <Header />
      <NavBar />

      <main className="main-container">
        <Outlet />
      </main>
      </VideosProvider>
      </UsersProvider>
    </div>
  );
}

export default Layout;
