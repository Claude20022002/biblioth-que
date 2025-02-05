import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./modals.css";

const Modal = ({ show, item, onClose }) => {
    if (!show || !item) {
        return null;
    }

    const thumbnail =
        item.volumeInfo?.imageLinks?.smallThumbnail ||
        "https://placehold.co/600x400/png";

    return (
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}>
                    <CloseIcon />
                </button>
                <div className="inner-box">
                    <img
                        className="modal-image"
                        src={thumbnail}
                        alt={item.volumeInfo?.title}
                    />
                    <div className="info">
                        <h1 className="modal-title">
                            {item.volumeInfo?.title || "Titre inconnu"}
                        </h1>
                        <h3 className="modal-author">
                            {item.volumeInfo?.authors?.join(", ") ||
                                "Auteur inconnu"}
                        </h3>
                        <h4 className="modal-details">
                            {item.volumeInfo?.publisher || "Éditeur inconnu"}{" "}
                            <span>
                                {" "}
                                |{" "}
                                {item.volumeInfo?.publishedDate ||
                                    "Date inconnue"}
                            </span>
                        </h4>
                        <p className="modal-description">
                            {item.volumeInfo?.description ||
                                "Aucune description disponible."}
                        </p>
                        {item.volumeInfo?.previewLink && (
                            <a
                                href={item.volumeInfo.previewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-button"
                            >
                                Découvrir
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
