import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Header from "./components/header/Header";
import Librairie from "./pages/Librairie";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/librairie" element={<Librairie />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
        </>
    );
}
