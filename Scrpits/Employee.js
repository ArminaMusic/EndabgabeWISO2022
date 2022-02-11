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
            DoenerTrainer.crc2.fillStyle = "blue";
            DoenerTrainer.crc2.translate(this.position.x, this.position.y);
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.arc(0, 0, 30, 0, 360);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.restore();
        }
        //update Feelings of Employee
        updateFeelings(_addend) {
            this.feeling = this.feelings[this.feelings.indexOf(this.feeling) + _addend];
        }
    }
    DoenerTrainer.Employee = Employee;
})(DoenerTrainer || (DoenerTrainer = {}));
;
//# sourceMappingURL=Employee.js.map