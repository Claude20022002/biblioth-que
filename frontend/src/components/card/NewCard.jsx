import React from "react";
import "./newcard.css";

export default function NewCard() {
    return (
        <main>
            <div class="book-card">
                <div class="book-card__cover">
                    <div class="book-card__book">
                        <div class="book-card__book-front">
                            <img
                                class="book-card__img"
                                src="https://i.ibb.co/gTvbqnQ/harry-potter.jpg"
                            />
                        </div>
                        <div class="book-card__book-back"></div>
                        <div class="book-card__book-side"></div>
                    </div>
                </div>
                <div>
                    <div class="book-card__title">
                        Harry Potter e a Pedra Filosofal
                    </div>
                    <div class="book-card__author">J. K. Rowling</div>
                </div>
            </div>
        </main>
    );
}
