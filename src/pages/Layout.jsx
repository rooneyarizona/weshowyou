import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { VideosProvider } from "../contexts/VideosContext";
import { UsersProvider } from "../contexts/UsersContext";
import Footer from "../components/Footer";

/**
 * Layout page to provide outlet with Context Providers wrapped for global props.
 * 
 */

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
          <footer className="main-container">
            <Footer />
          </footer>
        </VideosProvider>
      </UsersProvider>
    </div>
  );
}

export default Layout;
