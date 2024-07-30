

import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Account from "./pages/Account";
import Videos from "./pages/Videos";
import Upload from "./pages/Upload";
import Layout from "./pages/Layout";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import RegisterUser from "./pages/RegisterUser";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import TestPage from "./pages/TestPage";
import Administration from "./pages/Administration";
import GetAllUsers from "./pages/GetAllUsers";
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import SearchResults from "./components/SearchResults";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Videos />} />
        <Route path="account" element={<Account />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="about" element={<About />} />
        <Route path="contactUs" element={<ContactUs />}/>
        <Route path="videos" element={<Videos />} />
        <Route path="searchResults" element={<SearchResults />} />
        <Route path="upload" element={<Upload />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="registrationSuccess" element={<RegistrationSuccess />} />
        <Route path="testPage" element={<TestPage />} />
        <Route path="administration" element={<Administration />} />
        <Route path="getAllUsers" element={<GetAllUsers />} />
        <Route path="*" element={<PageNotFound />} />
        </Route>
        </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
