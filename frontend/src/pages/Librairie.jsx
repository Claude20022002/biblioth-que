import { Stack, TextField, Box } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Librairie() {
    const [reseach, setReseach] = useState("");
    const [books, setBooks] = useState([]);
    const [errors, setErrors] = useState({});

    const fetchBooks = async () => {
        try {
            const response = await axios.get(
                "https://www.googleapis.com/books/v1/volumes?q=*&key=AIzaSyBS6AAae5yQNO6CXLLR0ea5jkVukbqvU00"
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
        <div>
            <Stack>
                <Box>
                    <TextField
                        label="Nom"
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
            </Stack>
        </div>
    );
}
