import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";

const CardBook = ({ title, image, description }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                borderRadius: "16px",
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                    transform: "scale(1.05)",
                },
            }}
        >
            <CardMedia
                component="img"
                height="250"
                image={image}
                alt={title}
                sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
            />
            <CardContent sx={{ padding: "16px" }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        marginTop: "8px",
                        height: "60px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 3, // 3 lignes maximales
                        WebkitBoxOrient: "vertical",
                        display: "-webkit-box",
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
            <Button
                size="small"
                sx={{
                    width: "100%",
                    borderRadius: "0 0 8px 8px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#45a049",
                    },
                }}
            >
                Voir Détails
            </Button>
        </Card>
    );
};

export default CardBook;
