import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/home';
import AboutPage from './components/aboutus';
import CoursesPage from './components/courses';
import Profile from './components/profile';
import Mainbar from './components/MainBar';
import FaqsPage from "./components/Faqs";
import HireFromUs from "./components/hirefromus";
import RegistrationPage from "./components/Registration";
import SignInPage from "./components/signIn";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/mainbar" element={<Mainbar />} />
        <Route path="/Faqs" element={<FaqsPage/>} />
        <Route path="/HireFromUs" element={<HireFromUs/>} />
        <Route path="/Register" element={<RegistrationPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
