//import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./../assets/css/reset.css";
import "../assets/css/style.css";
//import UserContext from "../contexts/UserContext";

import SignInPage from "./pages/SignInPage.jsx";
import Timeline from "./pages/Timeline.jsx";

export default function App(){
    return(
        // <UserContext.Provider value={ } >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} ></Route>
                    <Route path="/timeline" element={<Timeline />} ></Route>
                </Routes>
            </BrowserRouter>
        // </UserContext.Provider>
    );
}