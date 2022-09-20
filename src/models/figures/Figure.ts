// @ts-ignore
import logo from "../../assets/black-king.png";
import {Cell} from "../Cell";
import {Colors} from "../Colors";

export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Король",
    QUEEN = "Фурзь",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.logo = null;
        this.cell = cell;
        this.cell.figure = this;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) return false;
        if (target.figure?.name === FigureNames.KING) return false;
        return true;
    }

    moveFigure(target: Cell) {
    }
}
