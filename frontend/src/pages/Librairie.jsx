import React from "react";
import "../style/librairie.css";
import { Stack, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import CardBook from "../components/card/CardBook";

export default function Librairie() {
    // Styling personnalisé pour les éléments Grid
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        borderRadius: "8px", // Ajout d'une bordure arrondie pour un meilleur design
    }));

    return (
        <div className="body">
            <Stack
                sx={{
                    height: "100vh",
                    flexDirection: "column",
                    justifyContent: "flex-start", // Utilisation de flex-start pour éviter un grand espace vertical
                    alignItems: "center",
                    padding: "20px", // Ajout de padding pour plus de confort
                }}
            >
                {/* Section de Recherche */}
                <Box
                    sx={{
                        marginBottom: "20px",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Recherche
                </Box>

                {/* Grille contenant les cartes */}
                <Box sx={{ width: "100%" }}>
                    <Grid
                        container
                        spacing={2} // Espacement entre les éléments
                        sx={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(200px, 1fr))", // Utilisation de `auto-fill` pour la responsivité
                            gap: "20px", // Espacement entre les cartes
                        }}
                    ></Grid>
                </Box>
            </Stack>
        </div>
    );
}
