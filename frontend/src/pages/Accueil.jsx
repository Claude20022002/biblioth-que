import { Stack, Typography, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typewriter from "typewriter-effect";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import React from "react";
import "../style/accueil.css";
import SplitText from "../components/splitText/SplitText";
import { styled } from "@mui/material/styles";

// Données des cartes
const cards = [
    {
        id: 1,
        title: "Évasion et développement personnel",
        description:
            "La lecture permet de s'évader dans des mondes imaginaires ou de découvrir de nouvelles perspectives. Cela peut être une véritable échappatoire au quotidien et aider à nourrir son esprit avec des idées nouvelles.",
    },
    {
        id: 2,
        title: "Amélioration de la concentration et de la mémoire",
        description:
            "Lire nécessite de l'attention et de la concentration, ce qui aide à améliorer la capacité à se concentrer.",
    },
    {
        id: 3,
        title: "Développement du vocabulaire et des compétences linguistiques",
        description:
            "Lire régulièrement expose à de nouveaux mots et à différentes structures grammaticales, ce qui enrichit le vocabulaire et améliore les compétences linguistiques.",
    },
    {
        id: 4,
        title: "Réduction du stress et relaxation",
        description:
            "Plonger dans un bon livre permet de se détendre et de réduire le stress. En s'immergeant dans une histoire captivante, on oublie les soucis du quotidien, ce qui peut avoir un effet apaisant sur l'esprit et le corps.",
    },
];

export default function Accueil() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    const handleAnimationComplete = () => {
        console.log("Toutes les lettres ont été animées !");
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.primary,
    }));

    return (
        <div className="body">
            {/* Section 1 */}
            <Stack
                component="section"
                className="sec-1"
                sx={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "90vh",
                    textAlign: "center",
                    gap: 2,
                }}
            >
                <SplitText
                    text="Your New Library"
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
                />
                <Typography
                    className="box-2"
                    variant="h6"
                    sx={{
                        maxWidth: "500px",
                        textAlign: "center",
                        color: "#FBF6E2",
                        fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.5rem" },
                    }}
                >
                    Découvrez une nouvelle façon de lire et de découvrir de
                    nouveaux livres.
                </Typography>
            </Stack>

            {/* Section 2 */}
            <Stack className="sec-2" component="section" sx={{ p: 3 }}>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",

                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{ mb: 3, textAlign: "center" }}
                    >
                        4 Bonnes raisons de reprendre la lecture
                    </Typography>
                    <Grid
                        className="magrid"
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            background: "transparent",
                            backdropFilter: "blur(5px)",
                            padding: "15px",
                            margin: "15px 20px",
                            borderRadius: "30px",
                        }}
                    >
                        <Grid size={6}>
                            <Item>
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
                                        gap: 2,
                                    }}
                                >
                                    {cards.map((card, index) => (
                                        <Card key={card.id}>
                                            <CardActionArea
                                                onClick={() =>
                                                    setSelectedCard(index)
                                                }
                                                data-active={
                                                    selectedCard === index
                                                        ? ""
                                                        : undefined
                                                }
                                                sx={{
                                                    height: "100%",
                                                    "&[data-active]": {
                                                        backgroundColor:
                                                            "action.selected",
                                                        "&:hover": {
                                                            backgroundColor:
                                                                "action.selectedHover",
                                                        },
                                                    },
                                                }}
                                            >
                                                <CardContent
                                                    sx={{ height: "100%" }}
                                                >
                                                    <Typography
                                                        variant="h5"
                                                        component="div"
                                                    >
                                                        {card.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        {card.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    ))}
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <Stack
                    sx={{
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            display: "flex",
                            fontSize: {
                                xs: "1.5rem",
                                sm: "2.8rem",
                                md: "3.3rem",
                            },
                            fontWeight: "bold",
                            background:
                                "linear-gradient(90deg, #FBF6E2, #ECCEAE, #E68369, #131842)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            flexGrow: "2",
                            textAlign: "center",
                        }}
                    >
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: [
                                    "Plongez dans l’univers captivant de la lecture ! ",
                                ],
                            }}
                        />
                    </Typography>
                    <Stack
                        className="text"
                        sx={{
                            backgroundColor: "#131842",
                            borderRadius: "30% 70% 24% 76% / 31% 25% 75% 69%",
                            boxSizing: "border-box",
                            overflow: "auto", // Permet le défilement si nécessaire
                            height: "400px",
                            width: "80%", // Pour éviter l’étirement
                            maxWidth: "600px", // Empêche une largeur excessive
                            padding: "20px", // Ajoute un espace intérieur pour éviter que le texte touche les bords
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            display: "flex",
                            boxShadow: "0 0 15px 5px rgba(236, 206, 174, 0.8)", // Effet lumineux
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#FBF6E2",
                                wordBreak: "break-word", // Évite que le texte dépasse la div
                                fontSize: "1rem", // Ajuste la taille du texte si nécessaire
                            }}
                        >
                            La lecture est une porte ouverte vers l’imaginaire
                            et la connaissance. Chaque livre est une aventure
                            qui enrichit l’esprit et nourrit l’âme. Laissez-vous
                            emporter par la magie des mots et découvrez de
                            nouveaux horizons !
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    );
}
