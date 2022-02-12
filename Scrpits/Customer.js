/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 11.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    class Customer extends DoenerTrainer.Human {
        constructor(_position, _satisfaction) {
            super(_position);
            this.position = _position;
            this.satisfaction = _satisfaction;
        }
        move() {
            //
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
;
//# sourceMappingURL=Customer.js.map