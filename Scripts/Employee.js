/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 11.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    class Employee extends DoenerTrainer.Moveable {
        //constructor
        constructor(_position) {
            super(_position);
        }
        //draw Employee
        draw() {
            DoenerTrainer.crc2.save();
            //
            DoenerTrainer.crc2.restore();
        }
        //update Feelings of Employee
        updateFeelings(_addend) {
            //this.feeling = this.feelings[this.feelings.indexOf(this.feeling) + _addend];
            /*
            updateFeeling(): void {
            this.satisfaction = this.satisfaction - 5;
    
            if (this.satisfaction >= 60) {
                this.feeling = FEELING.HAPPY;
            }
    
            if (this.satisfaction < 60 && this.satisfaction > 25) {
                this.feeling = FEELING.ANGRY;
            }
    
            if (this.satisfaction <= 25) {
                this.feeling = FEELING.SLEEPY;
            }
            */
        }
    }
    DoenerTrainer.Employee = Employee;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Employee.js.map