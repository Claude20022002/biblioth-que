import React from "react";
import "./newcard.css";

export default function NewCard() {
    return (
        <main>
            <div className="book-card">
                <div className="book-card__cover">
                    <div className="book-card__book">
                        <div className="book-card__book-front">
                            <img
                                className="book-card__img"
                                src="https://i.ibb.co/gTvbqnQ/harry-potter.jpg"
                            />
                        </div>
                        <div className="book-card__book-back"></div>
                        <div className="book-card__book-side"></div>
                    </div>
                </div>
                <div>
                    <div className="book-card__title">
                        Harry Potter e a Pedra Filosofal
                    </div>
                    <div className="book-card__author">J. K. Rowling</div>
                </div>
            </div>
        </main>
    );
}
