import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Box, Grid, IconButton } from "@mui/material";
import {
    Facebook,
    Twitter,
    Google,
    Instagram,
    LinkedIn,
    GitHub,
    Home,
    Email,
    Phone,
} from "@mui/icons-material";

export default function Footer() {
    return (
        <Box
            sx={{
                padding: "40px 0",
                backgroundColor: "#131842",
            }}
        >
            {/* Section de réseaux sociaux */}
            <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{
                    borderBottom: "1px solid #ddd",
                    padding: "20px",
                    alignItems: "center",
                }}
            >
                <Typography sx={{ color: "#FBF6E2" }}>
                    Get connected with us on social networks:
                </Typography>
                <IconButton color="primary" href="#" aria-label="facebook">
                    <Facebook />
                </IconButton>
                <IconButton color="primary" href="#" aria-label="twitter">
                    <Twitter />
                </IconButton>
                <IconButton color="primary" href="#" aria-label="google">
                    <Google />
                </IconButton>
                <IconButton color="primary" href="#" aria-label="instagram">
                    <Instagram />
                </IconButton>
                <IconButton color="primary" href="#" aria-label="linkedin">
                    <LinkedIn />
                </IconButton>
                <IconButton color="primary" href="#" aria-label="github">
                    <GitHub />
                </IconButton>
            </Stack>

            {/* Section principale du footer */}
            <Grid
                container
                spacing={4}
                sx={{
                    padding: "20px",
                    justifyContent: "center",
                    color: "#FBF6E2",
                }}
                className="container"
            >
                {/* Section Company */}
                <Grid item xs={12} md={3}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginBottom: 2 }}
                    >
                        Claude LK/Claude20022002
                    </Typography>
                    <Typography variant="body2" color="#FBF6E2">
                        Online library for book enthusiasts. Discover a vast
                        collection of books and share your opinions with a
                        community of readers.
                    </Typography>
                </Grid>

                {/* Section Categories */}
                <Grid item xs={6} md={2} sx={{ color: "#FBF6E2" }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginBottom: 2 }}
                    >
                        Categories
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            to="#"
                            style={{ textDecoration: "none", color: "#FBF6E2" }}
                        >
                            Romans
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            to="#"
                            style={{ textDecoration: "none", color: "#FBF6E2" }}
                        >
                            Développement
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            to="#"
                            style={{ textDecoration: "none", color: "#FBF6E2" }}
                        >
                            Poème
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            to="#"
                            style={{ textDecoration: "none", color: "#FBF6E2" }}
                        >
                            Etc
                        </Link>
                    </Typography>
                </Grid>

                {/* Section Useful Links */}
                <Grid item xs={6} md={2} sx={{ color: "#FBF6E2" }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginBottom: 2 }}
                    >
                        Useful links
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            to="/contact"
                            style={{ textDecoration: "none", color: "#FBF6E2" }}
                        >
                            Contact
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            to="/librairie"
                            style={{ textDecoration: "none", color: "#FBF6E2" }}
                        >
                            BookStore
                        </Link>
                    </Typography>
                </Grid>

                {/* Section Contact */}
                <Grid item xs={12} md={3} sx={{ color: "#FBF6E2" }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginBottom: 2 }}
                    >
                        Contact
                    </Typography>
                    <Typography variant="body2">
                        <Home sx={{ fontSize: 18, marginRight: 1 }} />
                        Casablanca, Casa 20026, MA
                    </Typography>
                    <Typography variant="body2">
                        <Email sx={{ fontSize: 18, marginRight: 1 }} />
                        clusamote@gmail.com
                    </Typography>
                    <Typography variant="body2">
                        <Phone sx={{ fontSize: 18, marginRight: 1 }} />+ 212 775
                        127 274
                    </Typography>
                </Grid>
            </Grid>

            {/* Section Copyright */}
            <Stack
                direction="row"
                justifyContent="center"
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    padding: "10px 0",
                    marginTop: "40px",
                }}
            >
                <Typography variant="body2" color="#FBF6E2">
                    © 2025 Copyright:
                    <Link
                        to="https://github.com/Claude20022002"
                        style={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                        Github/Claude20022002
                    </Link>
                </Typography>
            </Stack>
        </Box>
    );
}
