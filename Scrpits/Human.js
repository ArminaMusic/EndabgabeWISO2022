/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    class Human {
        //feeling: FEELING;
        constructor(_position) {
        }
        move(_timeslice) {
        }
        draw(_position) {
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            DoenerTrainer.crc2.moveTo(110, 75);
            DoenerTrainer.crc2.arc(60, 65, 5, 0, Math.PI * 2, true); // Linkes Auge
            DoenerTrainer.crc2.moveTo(95, 65);
            DoenerTrainer.crc2.arc(90, 65, 5, 0, Math.PI * 2, true); // Rechtes Auge
            DoenerTrainer.crc2.stroke();
            //mouth
            //switch (this.feeling) {
            /*
            case FEELING.HAPPY:
                ctx.arc(75, 75, 35, 0, Math.PI, false);
                ctx.moveTo(65, 65);
                break;

            case FEELING.ANGRY:
                ctx.arc(75, 75, 35, 0, Math.PI, false);
                ctx.moveTo(65, 65);
                break;

            case FEELING.SLEEPY:
                ctx.arc(75, 75, 35, 0, Math.PI, false);
                ctx.moveTo(65, 65);
                break;
            */
            //}
        }
    }
    DoenerTrainer.Human = Human;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Human.js.map