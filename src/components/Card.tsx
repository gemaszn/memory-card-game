import type { Card as CardType } from "../types/game";
import back from "../assets/back.jpg";

interface Props {
    card: CardType;
    onClick: () => void;
}

export const Card = ({ card, onClick }: Props) => {

    return (
        <div className="w-30 h-46 rounded-xl overflow-hidden shadow-lg border border-slate-600"
            onClick={onClick}>
            {card.isUp ? (
                <img
                    src={card.pattern}
                    alt=""
                    className="w-full h-full object-cover"
                />
            ) : (
                <img
                    src={back}
                    alt=""
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    )
}