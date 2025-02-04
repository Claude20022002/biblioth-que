import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "/logo.svg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const iconStyle = {
        width: "100%",
        height: "100%",
    };

    return (
        <header>
            <Stack
                className="logo"
                sx={{
                    width: { xs: "90px !important", sm: "130px !important" },
                }}
            >
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </Stack>

            <Stack className="nav">
                {/* Icône Menu Burger */}
                <Box className="menu" onClick={toggleMenu}>
                    {open ? (
                        <IoMdClose style={iconStyle} />
                    ) : (
                        <IoMenu style={iconStyle} />
                    )}
                </Box>

                {/* Liste des liens avec effet de slide */}
                <ul className={open ? "isActive" : ""}>
                    <li>
                        <Link to="/" onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/librairie" onClick={toggleMenu}>
                            Bookstore
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </Stack>
        </header>
    );
}
