import type { Card } from "../types/game";

interface Props {
    card: Card;
}

export function Card({ card }: Props) {

    return (
        <div className="w-48 h-72 rounded-xl overflow-hidden shadow-lg border border-slate-600">
            {card.isUp ? (
                <img
                    src={card.pattern}
                    alt=""
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full 
                    bg-linear-to-br from-slate-800 to-slate-900 
                    flex items-center justify-center">
                    <div className="w-[85%] h-[90%] rounded-lg 
                      border border-slate-500 
                      bg-[radial-gradient(circle,#475569_1px,transparent_1px)] 
                      bg-size-[16px_16px]" />
                </div>
            )}
        </div>
    )
}