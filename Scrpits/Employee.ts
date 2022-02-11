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
            crc2.fillStyle = "blue";
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 30, 0, 360);
            crc2.fill();
            crc2.restore();
        }

        //update Feelings of Employee
        public updateFeelings(_addend: number): void {
            this.feeling = this.feelings[this.feelings.indexOf(this.feeling) + _addend];
        }

    }
};