import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./../assets/css/reset.css";
import "../assets/css/style.css";
import UserContext from "../contexts/UserContext";

import SignInPage from "./pages/Sing-in/SignInPage.jsx";
import SignUp from "./pages/Sign-up";
import Timeline from "./pages/Timeline/Timeline.jsx";
import UserPage from "./pages/UserPage/UserPage.jsx";

export default function App(){
    const [userData, setUserData] = useState(null);
    const [user, setUser] = useState({});
    return(
        <UserContext.Provider value={ {userData, setUserData, user, setUser} } >
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<SignInPage/>} />
                        <Route path="/sign-up" element={<SignUp/>} />
                        <Route path="/timeline" element={<Timeline/>} />
                        <Route path="/user/:id" element={<UserPage/>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}