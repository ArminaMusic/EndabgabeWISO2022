/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 11.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    let formData;
    let employees = [];
    let taskPositions = [];
    let theMenu = ["Döner", "Yufka", "Lahmacun"];
    let allIngredients = ["Salat", "Zwiebel", "Mais", "Tomaten", "Kraut", "Fleisch"];
    let completeOrder = [];
    let choosenIngredients = [];
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["HAPPY"] = 0] = "HAPPY";
        MOOD[MOOD["ANGRY"] = 1] = "ANGRY";
        MOOD[MOOD["SLEEPY"] = 2] = "SLEEPY";
    })(MOOD = DoenerTrainer.MOOD || (DoenerTrainer.MOOD = {}));
    let TASK;
    (function (TASK) {
        TASK[TASK["BAR"] = 0] = "BAR";
        TASK[TASK["PREPARE"] = 1] = "PREPARE";
        TASK[TASK["ORDER"] = 2] = "ORDER";
        TASK[TASK["REFILL"] = 3] = "REFILL";
    })(TASK = DoenerTrainer.TASK || (DoenerTrainer.TASK = {}));
    window.addEventListener("load", hdndlLoad);
    function hdndlLoad(_event) {
        let canvas = document.querySelector("canvas");
        DoenerTrainer.crc2 = canvas.getContext("2d");
        drawDoenerBude();
        window.setInterval(update, 1000);
    }
    function startGame() {
        formData = new FormData(document.forms[0]);
        getSettings();
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        let canvas = document.querySelector("canvas");
        canvas.classList.remove("hidden");
    }
    function drawDoenerBude() {
        //white bg canvas
        DoenerTrainer.crc2.fillStyle = "red";
        DoenerTrainer.crc2.fillRect(0, 0, 800, 600);
        //border
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.rect(0, 0, 800, 600);
        //game infos
        //customer
        DoenerTrainer.crc2.moveTo(0, 500);
        DoenerTrainer.crc2.lineTo(800, 500);
        DoenerTrainer.crc2.stroke();
        //bar
        DoenerTrainer.crc2.moveTo(0, 150);
        DoenerTrainer.crc2.lineTo(800, 150);
        DoenerTrainer.crc2.stroke();
        //storage
        DoenerTrainer.crc2.moveTo(550, 0);
        DoenerTrainer.crc2.lineTo(550, 150);
        DoenerTrainer.crc2.stroke();
        //cuttingboard#
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.moveTo(350, 0);
        DoenerTrainer.crc2.lineTo(350, 150);
        DoenerTrainer.crc2.stroke();
        DoenerTrainer.crc2.closePath();
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.fillRect(30, 25, 100, 100);
        DoenerTrainer.crc2.strokeRect(370, 30, 160, 100);
        DoenerTrainer.crc2.fill();
        DoenerTrainer.crc2.closePath();
        //cashier
    }
    function clickIngredient() {
        //
    }
    function getSettings() {
        formData = new FormData(document.forms[0]);
        let employeeAmount;
        let employeeRestTime;
        let customerAmount;
        let stockCapacity;
        let containerCapacity;
        employeeAmount = Number(formData.get("employeeAmount"));
        employeeRestTime = Number(formData.get("restTime"));
        customerAmount = Number(formData.get("customerAmount"));
        stockCapacity = Number(formData.get("stockCapacity"));
        containerCapacity = Number(formData.get("containerCapacity"));
        /*
        corn = capIngredients;
        lettuce = capIngredients;
        onion = capIngredients;
        cabbage = capIngredients;
        tomato = capIngredients;
        */
    }
    function update() {
        // console.log("Update")    
    }
    function createOrder() {
        //
    }
    function checkOrder() {
        //
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Main.js.map