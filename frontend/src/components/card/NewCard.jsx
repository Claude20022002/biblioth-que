import React, { useState } from "react";
import Modal from "../modals/Modals";
import "./newcard.css";

export default function NewCard({ book }) {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    if (!book || !book.volumeInfo) return null;

    let thumbnail =
        book.volumeInfo.imageLinks?.smallThumbnail ||
        "https://placehold.co/600x400.png"; // Image par défaut

    let amount = book.saleInfo?.listPrice?.amount || "Gratuit"; // Prix par défaut

    return (
        <>
            <main>
                <div
                    className="book-card"
                    onClick={() => {
                        setShow(true);
                        setItem(book);
                    }}
                >
                    <div className="book-card__cover">
                        <div className="book-card__book">
                            <div className="book-card__book-front">
                                <img
                                    className="book-card__img"
                                    src={thumbnail}
                                    alt={book.volumeInfo.title}
                                />
                            </div>
                            <div className="book-card__book-back"></div>
                            <div className="book-card__book-side"></div>
                        </div>
                    </div>
                    <div>
                        <div className="book-card__title">
                            {book.volumeInfo.title}
                        </div>
                        <div className="book-card__author">
                            {book.volumeInfo.authors?.join(", ") ||
                                "Auteur inconnu"}
                        </div>
                        <div className="book-card__price">{amount}</div>
                    </div>
                </div>
            </main>
            {show && (
                <Modal
                    show={show}
                    item={bookItem}
                    onClose={() => setShow(false)}
                />
            )}
        </>
    );
}
