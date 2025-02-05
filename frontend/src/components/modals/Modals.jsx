import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./modals.css";
import { Button } from "@mui/material";

const Modal = ({ show, item, onClose }) => {
    if (!show || !item) {
        return null;
    }

    const thumbnail =
        item.volumeInfo?.imageLinks?.smallThumbnail ||
        "https://placehold.co/600x400.png";

    return (
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}>
                    <CloseIcon />
                </button>
                <div className="inner-box">
                    <img src={thumbnail} alt={item.volumeInfo?.title} />
                    <div className="info">
                        <h1>{item.volumeInfo?.title || "Titre inconnu"}</h1>
                        <h3>
                            {item.volumeInfo?.authors?.join(", ") ||
                                "Auteur inconnu"}
                        </h3>
                        <h4>
                            {item.volumeInfo?.publisher || "Éditeur inconnu"}{" "}
                            <span>
                                {item.volumeInfo?.publishedDate ||
                                    "Date inconnue"}
                            </span>
                        </h4>
                        <br />
                        {item.volumeInfo?.previewLink && (
                            <a
                                href={item.volumeInfo.previewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outlined">Plus d'infos</Button>
                            </a>
                        )}
                    </div>
                </div>
                <h4 className="description">
                    {item.volumeInfo?.description ||
                        "Aucune description disponible."}
                </h4>
            </div>
        </div>
    );
};

export default Modal;
