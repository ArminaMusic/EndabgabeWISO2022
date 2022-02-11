/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 11.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new DoenerTrainer.Vector(0, 0);
            this.velocity = new DoenerTrainer.Vector(0, 0);
        }
        move(_timeslice) {
            // console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += DoenerTrainer.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += DoenerTrainer.crc2.canvas.height;
            if (this.position.x > DoenerTrainer.crc2.canvas.width)
                this.position.x -= DoenerTrainer.crc2.canvas.width;
            if (this.position.y > DoenerTrainer.crc2.canvas.height)
                this.position.y -= DoenerTrainer.crc2.canvas.height;
        }
    }
    DoenerTrainer.Moveable = Moveable;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Movable.js.map