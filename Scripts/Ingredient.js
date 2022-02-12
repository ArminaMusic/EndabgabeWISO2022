/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    //all Ingredients = Salat, Zwiebel, Mais, Tomaten, Kraut, Dönerfleisch, Hackfleisch, Soße
    class Ingredient {
        constructor(_color, _position, _amountBar, _amountStock) {
            this.color = _color;
            this.position = _position;
            this.amountBar = _amountBar;
            this.amountStock = _amountStock;
        }
    }
    DoenerTrainer.Ingredient = Ingredient;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Ingredient.js.map