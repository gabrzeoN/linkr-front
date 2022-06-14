import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/style.css";
import UserContext from "../contexts/UserContext";

import SignInPage from "./pages/SignInPage.jsx";

export default function App(){
    const [userData, setUserData] = useState(null);
    return(
        <UserContext.Provider value={ {userData, setUserData} } >
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<SignInPage/>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}