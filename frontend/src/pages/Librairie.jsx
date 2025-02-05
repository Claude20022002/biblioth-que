import React from "react";
import { Stack, Box } from "@mui/material";
import CardBook from "../components/card/CardBook";

const Librairie = () => {
    return (
        <Box sx={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
            <Stack
                sx={{
                    display: "grid",
                    marginTop: "25px",
                    gridTemplateColumns: "repeat(4,minmax(200px,1fr))",
                    gap: "20px",
                    boxSizing: "border-box",

                    "@media (max-width: 1200px)": {
                        gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
                    },
                    "@media (max-width: 900px)": {
                        gridTemplateColumns: "repeat(2, minmax(200px, 1fr))",
                    },
                    "@media (max-width: 600px)": {
                        gridTemplateColumns: "1fr",
                    },
                }}
            >
                <CardBook
                    title="Le Livre A"
                    image="https://example.com/image-a.jpg"
                    description="Voici une description courte du Livre A. Ce livre est passionnant."
                />
                <CardBook
                    title="Le Livre B"
                    image="https://example.com/image-b.jpg"
                    description="Voici une description courte du Livre B. Ce livre est captivant."
                />
                <CardBook
                    title="Le Livre C"
                    image="https://example.com/image-c.jpg"
                    description="Voici une description courte du Livre C. Un excellent choix."
                />
                <CardBook
                    title="Le Livre D"
                    image="https://example.com/image-d.jpg"
                    description="Voici une description courte du Livre D. Très recommandé."
                />
            </Stack>
        </Box>
    );
};

export default Librairie;
