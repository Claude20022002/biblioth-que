import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "/logo.svg";

export default function Header() {
    return (
        <div>
            <header>
                <Stack className="logo">
                    <img src={Logo} alt="Logo" />
                </Stack>
                <Stack className="nav" component="nav">
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/librairie">Librairie</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </Stack>
            </header>
        </div>
    );
}
