
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Card {
    id: number;
    isUp: boolean;
    isMatched: boolean;
    pattern: string;
}

export interface GameState {
    cardsInBoard: Card[];
    cardsUp: number;
    isDone: boolean;
    activeDifficulty: Difficulty;
}