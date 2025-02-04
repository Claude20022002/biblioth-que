import { Stack, Typography } from "@mui/material";
import React from "react";
import "../style/accueil.css";
import SplitText from "../components/splitText/SplitText";

export default function Accueil() {
    const handleAnimationComplete = () => {
        console.log("Toutes les lettres ont été animées !");
    };

    return (
        <div className="body">
            <Stack
                component="section"
                className="sec-1"
                sx={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "90vh",
                }}
            >
                <SplitText
                    text="Your New Library"
                    className="text-2xl font-semibold text-center box-1"
                    delay={150}
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
                    sx={{ textAlign: "center", margin: "auto 1rem" }}
                >
                    Découvrez une nouvelle façon de lire et de nouveau livre
                </Typography>
            </Stack>
        </div>
    );
}
