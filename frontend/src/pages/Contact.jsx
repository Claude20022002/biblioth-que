import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <Stack
            component="section"
            sx={{
                minHeight: "100vh",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
            }}
        >
            <Typography
                variant="h2"
                sx={{ fontWeight: "bold", color: "#E68369" }}
            >
                Laisse nous vos impressions
            </Typography>
            <Stack
                sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "500px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    }}
                >
                    {/* Vidéo en arrière-plan */}
                    <video
                        autoPlay
                        muted
                        loop
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 0,
                        }}
                    >
                        <source src="/videos/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Texte au-dessus de la vidéo */}
                    <Stack
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            textAlign: "center",
                            color: "#FFF",
                            padding: "50px 20px",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            backdropFilter: "blur(5px)",
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold">
                            Accédez à la connaissance en un clic
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Explorez notre vaste collection de livres et
                            enrichissez votre esprit à travers la lecture.
                        </Typography>

                        {/* Bouton vers la librairie */}
                        <Button
                            component={Link}
                            to="/librairie"
                            sx={{
                                mt: 3,
                                backgroundColor: "#FFF",
                                color: "#E68369",
                                px: 3,
                                py: 1,
                                fontWeight: "bold",
                                borderRadius: "10px",
                                transition: "0.3s ease",
                                "&:hover": {
                                    backgroundColor: "hsl(93, 75%, 76%)",
                                    color: "hsl(0, 0%, 18%)",
                                },
                            }}
                        >
                            Découvrir la librairie
                        </Button>
                    </Stack>
                </Box>
                <Stack>Formulaire</Stack>
            </Stack>
        </Stack>
    );
}
