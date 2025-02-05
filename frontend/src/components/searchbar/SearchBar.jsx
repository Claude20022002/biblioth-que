import React from "react";
import { TextField, Box, Typography } from "@mui/material";

export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <Box
            sx={{
                margin: "20px 5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "40%",
                boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                background: "#FBF6E2",
                borderRadius: "5px",
                fontWeight: "800",
            }}
        >
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </Box>
    );
}
