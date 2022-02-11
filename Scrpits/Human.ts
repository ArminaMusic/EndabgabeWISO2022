/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 11.02.22
*/

namespace DoenerTrainer {

    export class Human {
        velocity: Vector;
        position: Vector;
        //feeling: FEELING;


        constructor(_position: Vector) {//
        }

        move(_timeslice: number): void {//
        }

        draw(_position: Vector): void {

            //head
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.arc(_position.x, _position.y, 0, 0, 0 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(_position.x - 0, _position.y - 0, 0, 0, 0 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(_position.x + 0, _position.y - 0, 0, 0, 0 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

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
};