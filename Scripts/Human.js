/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    console.log(DoenerTrainer.Moveable);
    class Human extends DoenerTrainer.Moveable {
        constructor(_position) {
            super(_position);
        }
        move(_timeslice) {
        }
        draw(_position) {
            console.log(_position);
            DoenerTrainer.crc2.save();
            DoenerTrainer.crc2.translate(_position.x, _position.y);
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            DoenerTrainer.crc2.moveTo(110, 75);
            DoenerTrainer.crc2.arc(60, 65, 5, 0, Math.PI * 2, true); // Linkes Auge
            DoenerTrainer.crc2.moveTo(95, 65);
            DoenerTrainer.crc2.arc(90, 65, 5, 0, Math.PI * 2, true); // Rechtes Auge
            DoenerTrainer.crc2.stroke();
            //draw mouth with switch-case to get feelings of customer or employee 
            //emotion will be definend in Employee and Customer Class 
            switch (this.feeling) {
                case DoenerTrainer.FEELING.HAPPY:
                    DoenerTrainer.crc2.arc(75, 75, 35, 0, Math.PI, false);
                    DoenerTrainer.crc2.moveTo(65, 65);
                    break;
                case DoenerTrainer.FEELING.ANGRY:
                    DoenerTrainer.crc2.arc(75, 75, 35, 0, Math.PI, false);
                    DoenerTrainer.crc2.moveTo(65, 65);
                    break;
                case DoenerTrainer.FEELING.SLEEPY:
                    DoenerTrainer.crc2.arc(75, 75, 35, 0, Math.PI, false);
                    DoenerTrainer.crc2.moveTo(65, 65);
                    break;
            }
        }
    }
    DoenerTrainer.Human = Human;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Human.js.map