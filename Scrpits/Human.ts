/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
namespace DoenerTrainer {
    export class Human {
        velocity: Vector;
        position: Vector;
        feeling: FEELING;

        constructor(_position: Vector) {//
        }

        move(_timeslice: number): void {//
        }

        draw(_position: Vector): void {

            crc2.save();
            crc2.translate(_position.x, _position.y);

            crc2.beginPath();
            crc2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            crc2.moveTo(110, 75);
            crc2.arc(60, 65, 5, 0, Math.PI * 2, true);  // Linkes Auge
            crc2.moveTo(95, 65);
            crc2.arc(90, 65, 5, 0, Math.PI * 2, true);  // Rechtes Auge
            crc2.stroke();


            //draw mouth with switch-case to get feelings of customer or employee 
                //emotion will be definend in Employee and Customer Class 
            switch (this.feeling) {
                case FEELING.HAPPY:
                    crc2.arc(75, 75, 35, 0, Math.PI, false);    
                    crc2.moveTo(65, 65);
                    break;

                case FEELING.ANGRY:
                    crc2.arc(75, 75, 35, 0, Math.PI, false);    
                    crc2.moveTo(65, 65);
                    break;

                case FEELING.SLEEPY:
                    crc2.arc(75, 75, 35, 0, Math.PI, false);    
                    crc2.moveTo(65, 65);
                    break;
                }
        }
    }
}