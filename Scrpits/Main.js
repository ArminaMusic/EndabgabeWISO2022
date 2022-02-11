var DoenerTrainer;
(function (DoenerTrainer) {
    let DOENER_EVENT;
    (function (DOENER_EVENT) {
    })(DOENER_EVENT = DoenerTrainer.DOENER_EVENT || (DoenerTrainer.DOENER_EVENT = {}));
    window.addEventListener("load", handleLoad);
    let moveables = [];
    function handleLoad(_event) {
    }
    function update() {
        // console.log("Update");
        DoenerTrainer.crc2.fillRect(0, 0, DoenerTrainer.crc2.canvas.width, DoenerTrainer.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(DoenerTrainer || (DoenerTrainer = {}));
;
//# sourceMappingURL=Main.js.map