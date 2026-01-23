import { useState } from "react";
import { cards } from "../data/cards";
import type { Difficulty, Card as CardType } from "../types/game";
import { Card } from "./Card";

interface Props {
    difficulty: Difficulty;
}

export const Board = ({ difficulty }: Props) => {

    let cardsForBoard;

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


    const [boardCards, setBoardCards] = useState<CardType[]>(cardsForBoard);

    const handleFlipCard = (clickedCard: CardType) => {
        setBoardCards(prevCards =>
            prevCards.map(card =>
                card.id === clickedCard.id ? { ...card, isUp: !card.isUp } : card
            )
        );
    };

    return (
        <div className={`grid ${gridCols} gap-4`}>
            {boardCards.map(card => (
                <Card key={card.id} card={card} onClick={() => handleFlipCard(card)} />
            ))}
        </div>
    )
}
