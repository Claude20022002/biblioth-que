import { Stack, Box } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/librairie.css";
import SplitText from "../components/splitText/SplitText";
import NewCard from "../components/card/NewCard";
import SearchBar from "../components/searchbar/SearchBar";
import PaginationOutlined from "../components/pagination/PaginationOutlined";

export default function Librairie() {
    const [errors, setErrors] = useState("");
    const [searchQuery, setSearchQuery] = useState(""); // État pour la recherche
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 8;

    const fetchBooks = async (page = 1, query = "") => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${
                    query ? `intitle:${query}` : "subject:fiction"
                }&maxResults=${booksPerPage}&startIndex=${
                    (page - 1) * booksPerPage
                }`
            );
            console.log(response.data); // Vérification des données
            setBooks(response.data.items || []);
        } catch (error) {
            console.error("Erreur API :", error);
            setErrors({ fetch: "Impossible de récupérer les livres" });
        }
    };

    useEffect(() => {
        fetchBooks(currentPage, searchQuery); // Appel de la fonction de recherche avec le query
    }, [currentPage, searchQuery]); // Dépendances : quand `currentPage` ou `searchQuery` change

    return (
        <div className="body">
            <Stack
                sx={{
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "25px 30px",
                }}
            >
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery} // Met à jour la recherche
                />
                <Stack
                    sx={{
                        boxSizing: "border-box",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        width: "95%",
                    }}
                >
                    <SplitText
                        text="Our best books"
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
                        taille="h6"
                    />
                    <Box
                        sx={{
                            padding: "10px",
                            flexWrap: "wrap",
                            display: "flex",
                            flexDirection: "row",
                            gap: "35px",
                            width: "95%",
                            justifyContent: "center",
                            boxSizing: "border-box",
                        }}
                    >
                        {books.map((book, index) => (
                            <NewCard key={index} book={book} />
                        ))}
                    </Box>

                    <PaginationOutlined
                        totalItems={100} // Google Books ne donne pas toujours un total précis
                        itemsPerPage={booksPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </Stack>
            </Stack>
        </div>
    );
}
