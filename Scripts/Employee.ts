/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
namespace DoenerTrainer {
    export abstract class Employee extends Moveable {
        protected abstract readonly feelings: string[];
        protected feeling: string;

        //constructor
        protected constructor(_position: Vector) {
            super(_position);
        }

        //draw Employee
        public draw(): void {
            crc2.save();
            //
            crc2.restore();
        }

        //update Feelings of Employee
        public updateFeelings(_addend: number): void {
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
}