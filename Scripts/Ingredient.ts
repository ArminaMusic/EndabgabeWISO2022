/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/

namespace DoenerTrainer {

//all Ingredients = Salat, Zwiebel, Mais, Tomaten, Kraut, Dönerfleisch, Hackfleisch, Soße
    export abstract class Ingredient{
        color: string;
        position: Vector;
        amountBar: number;
        amountStock: number;

        constructor (_color: string, _position: Vector, _amountBar: number, _amountStock: number) {
            this.color = _color
            this.position = _position;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;

        }

        abstract draw(): void;

    }
}