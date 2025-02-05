import { Stack, TextField, Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CardBook from "../components/card/CardBook";
import "../style/librairie.css";
import SplitText from "../components/splitText/SplitText";

export default function Librairie() {
    const [reseach, setReseach] = useState("");
    const [books, setBooks] = useState([]);
    const [errors, setErrors] = useState({});
    const handleAnimationComplete = () => {
        console.log("Toutes les lettres ont été animées !");
    };

    const fetchBooks = async () => {
        try {
            const response = await axios.get(
                "https://www.googleapis.com/books/v1/volumes?q=*&key=APIKEY"
            );
            setBooks(response.data.items || []);
            console.log(books);
        } catch (error) {
            setErrors({ fetch: "Failed to fetch books" });
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <div className="body">
            <Stack
                sx={{
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "25px 30px",
                }}
            >
                <Box sx={{ margin: "20px 5px" }}>
                    <TextField
                        label="Reseach"
                        variant="outlined"
                        fullWidth
                        value={reseach}
                        onChange={(e) => {
                            setReseach(e.target.value);
                        }}
                    />
                    {errors.nameUser && (
                        <Typography variant="body2" color="error">
                            {errors.nameUser.message}
                        </Typography>
                    )}
                </Box>
                <Stack
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        border: "1px solid",
                        width: "95%",
                    }}
                >
                    <SplitText
                        text="Nos meilleurs ouvrages"
                        className="text-2xl font-semibold box-1"
                        delay={100}
                        animationFrom={{
                            opacity: 0,
                            transform: "translate3d(0,50px,0)",
                        }}
                        animationTo={{
                            opacity: 1,
                            transform: "translate3d(0,0,0)",
                        }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                        taille="h6"
                    />
                    <Box
                        sx={{
                            border: "1px solid",
                            padding: "10px",
                            flexWrap: "wrap",
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "95%",
                            justifyContent: "center",
                        }}
                    >
                        <CardBook
                            title={"Book"}
                            image={
                                "/frontend/public/images/pexels-pixabay-301920.jpg"
                            }
                            description={"Des livres inspirant !"}
                        />
                        <CardBook
                            title={"Book"}
                            image={
                                "/frontend/public/images/pexels-pixabay-301920.jpg"
                            }
                            description={"Des livres inspirant !"}
                        />
                        <CardBook
                            title={"Book"}
                            image={
                                "/frontend/public/images/pexels-pixabay-301920.jpg"
                            }
                            description={"Des livres inspirant !"}
                        />
                        <CardBook
                            title={"Book"}
                            image={
                                "/frontend/public/images/pexels-pixabay-301920.jpg"
                            }
                            description={"Des livres inspirant !"}
                        />
                        <CardBook
                            title={"Book"}
                            image={
                                "/frontend/public/images/pexels-pixabay-301920.jpg"
                            }
                            description={"Des livres inspirant !"}
                        />
                        <CardBook
                            title={"Book"}
                            image={
                                "/frontend/public/images/pexels-pixabay-301920.jpg"
                            }
                            description={"Des livres inspirant !"}
                        />
                        <CardBook
                            title={"Book"}
                            image={
                                "/frontend/public/images/pexels-pixabay-301920.jpg"
                            }
                            description={"Des livres inspirant !"}
                        />
                        <CardBook
                            title={"Book"}
                            image={
                                "/frontend/public/images/pexels-pixabay-301920.jpg"
                            }
                            description={"Des livres inspirant !"}
                        />
                    </Box>
                </Stack>
            </Stack>
        </div>
    );
}
