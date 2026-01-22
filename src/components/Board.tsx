import { cards } from "../data/cards";
import type { Difficulty } from "../types/game";
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


    return (
        <div className={`grid ${gridCols} gap-4`}>
            {cardsForBoard.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    )
}
