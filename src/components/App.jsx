import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./../assets/css/reset.css";
import "../assets/css/style.css";
import { AuthProvider } from "../contexts/UserContext";

import SignInPage from "./pages/Sing-in/SignInPage.jsx";
import SignUp from "./pages/Sign-up";
import Timeline from "./pages/Timeline/Timeline.jsx";
import UserPage from "./pages/UserPage/UserPage.jsx";
import TagPage from "./pages/Hashtag";


export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path='/hashtag/:hashtag' element={<TagPage />} />
                    <Route path="/user/:id" element={<UserPage />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}