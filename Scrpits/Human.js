/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 11.02.22
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
            //head
            DoenerTrainer.crc2.fillStyle = "yellow";
            DoenerTrainer.crc2.strokeStyle = "black";
            DoenerTrainer.crc2.lineWidth = 2;
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(_position.x, _position.y, 0, 0, 0 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            //eyes
            DoenerTrainer.crc2.fillStyle = "black";
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(_position.x - 0, _position.y - 0, 0, 0, 0 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(_position.x + 0, _position.y - 0, 0, 0, 0 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.stroke();
            DoenerTrainer.crc2.closePath();
            //mouth
            //switch (this.feeling) {
            /*
            case FEELING.HAPPY:
                //
                break;

            case FEELING.ANGRY:
                //
                break;

            case FEELING.SLEEPY:
                //
                break;
            */
            //}
        }
    }
    DoenerTrainer.Human = Human;
})(DoenerTrainer || (DoenerTrainer = {}));
;
//# sourceMappingURL=Human.js.map