import type { Card } from "../types/game";

//Card patterns
import bananas from "../assets/bananas.jpg"
import blue from "../assets/blue.jpg"
import cats from "../assets/cats.jpg"
import checkers from "../assets/checkers.jpg"
import dasies from "../assets/daisies.jpg"
import faces from "../assets/faces.jpg"
import fishes from "../assets/fishes.jpg"
import flowers from "../assets/flowers.jpg"
import fruits from "../assets/fruits.jpg"
import mirrorball from "../assets/mirrorball.jpg"
import pink from "../assets/pink.jpg"
import spiral from "../assets/spiral.jpg"
import squares from "../assets/squares.jpg"
import stars from "../assets/stars.jpg"
import sunmoon from "../assets/sunmoon.jpg"
import yellow from "../assets/yellow.jpg"

const patterns = [
    bananas, blue, cats, checkers, dasies, faces, fishes, flowers, fruits, mirrorball, pink, spiral, squares, stars, sunmoon, yellow
]


export const cards: Card[] = patterns.flatMap((pattern, index) => {
    return [
        { id: index * 2 + 1, isUp: false, isMatched: false, pattern },
        { id: index * 2 + 2, isUp: false, isMatched: false, pattern }
    ];
});