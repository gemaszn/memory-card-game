import { useState } from "react";
import { cards } from "../data/cards";
import type { Difficulty, Card as CardType } from "../types/game";
import { Card } from "./Card";

interface Props {
    difficulty: Difficulty;
}

export const Board = ({ difficulty }: Props) => {

    let cardsForBoard;

    // Determine the number of cards based on difficulty
    if (difficulty === "easy") {
        cardsForBoard = cards.slice(0, 12);
    } else if (difficulty === "medium") {
        cardsForBoard = cards.slice(0, 24);
    } else {
        cardsForBoard = [...cards];
    }

    cardsForBoard.sort(() => Math.random() - 0.5);

    const gridCols =
        difficulty === "hard" ? "grid-cols-8"
            : difficulty === "medium" ? "grid-cols-8"
                : "grid-cols-4";


    // State to manage the cards on the board
    const [boardCards, setBoardCards] = useState<CardType[]>(cardsForBoard);

    // Function to handle card flip
    const handleFlipCard = (clickedCard: CardType) => {

        // Allow flipping only if less than 2 non-matched cards are face up
        setBoardCards(prevCards => {

            const faceUpUnmatchedCards = prevCards.filter(
                card => card.isUp && !card.isMatched
            );

            if (faceUpUnmatchedCards.length >= 2 || clickedCard.isMatched) {
                return prevCards;
            }

            return prevCards.map(card =>
                card.id === clickedCard.id
                    ? { ...card, isUp: !card.isUp }
                    : card
            );
        });

        //Check for matches after a short delay
        setTimeout(() => {
            setBoardCards(prevCards => {
                const faceUpUnmatchedCards = prevCards.filter(
                    card => card.isUp && !card.isMatched
                );


                if (faceUpUnmatchedCards.length === 2) {
                    if (faceUpUnmatchedCards[0].pattern === faceUpUnmatchedCards[1].pattern) {
                        // Match => mark them as matched
                        return prevCards.map(card =>
                            card.isUp && !card.isMatched
                                ? { ...card, isMatched: true }
                                : card
                        );
                    } else {
                        // No match => flip them back down
                        return prevCards.map(card =>
                            card.isUp && !card.isMatched
                                ? { ...card, isUp: false }
                                : card
                        );
                    }
                }
                return prevCards;
            });
        }, 2000);
    };

    return (
        <div className={`grid ${gridCols} gap-4`}>
            {boardCards.map(card => (
                <Card key={card.id} card={card} onClick={() => handleFlipCard(card)} />
            ))}
        </div>
    )
}
