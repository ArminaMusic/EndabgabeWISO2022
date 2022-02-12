/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 11.02.22
*/
namespace DoenerTrainer {
    export class Customer extends Human {

        satisfaction: number;
        path: Array<Vector>;
        queuePositions: Array<Vector>;
    
        constructor(_position: Vector, _satisfaction: number) {
            super(_position);
            this.position = _position;
            this.satisfaction = _satisfaction;
            this.path = [new Vector(143, 715), new Vector(1060, 715)];
            this.queuePositions = [new Vector(911, 655), new Vector(1060, 655), new Vector(1215, 655), new Vector(1215, 735), new Vector(1060, 735)];
        }
    
        move(): void {
            
        }
    
        public updateFeeling(): void {
            this.satisfaction = this.satisfaction - 5;
    
            if (this.satisfaction >= 67) {
                this.feeling = FEELING.HAPPY;
            }
    
            if (this.satisfaction < 67 && this.satisfaction > 33) {
                this.feeling = FEELING.ANGRY;
            }
    
            if (this.satisfaction <= 33) {
                this.feeling = FEELING.SLEEPY;
            }
        }
    
    }
}