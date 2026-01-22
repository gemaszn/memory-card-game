import type { Card as CardType } from "../types/game";
import back from "../assets/back.jpg";

interface Props {
    card: CardType;
}

export const Card = ({ card }: Props) => {

    return (
        <div className="w-30 h-46 rounded-xl overflow-hidden shadow-lg border border-slate-600">
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