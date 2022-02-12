/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    class Customer extends DoenerTrainer.Human {
        constructor(_position, _satisfaction) {
            super(_position);
            this.position = _position;
            this.satisfaction = _satisfaction;
            this.path = [new DoenerTrainer.Vector(143, 715), new DoenerTrainer.Vector(1060, 715)];
            this.queuePositions = [new DoenerTrainer.Vector(911, 655), new DoenerTrainer.Vector(1060, 655), new DoenerTrainer.Vector(1215, 655), new DoenerTrainer.Vector(1215, 735), new DoenerTrainer.Vector(1060, 735)];
        }
        move() {
        }
        updateFeeling() {
            this.satisfaction = this.satisfaction - 5;
            if (this.satisfaction >= 67) {
                this.feeling = DoenerTrainer.FEELING.HAPPY;
            }
            if (this.satisfaction < 67 && this.satisfaction > 33) {
                this.feeling = DoenerTrainer.FEELING.ANGRY;
            }
            if (this.satisfaction <= 33) {
                this.feeling = DoenerTrainer.FEELING.SLEEPY;
            }
        }
    }
    DoenerTrainer.Customer = Customer;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Customer.js.map