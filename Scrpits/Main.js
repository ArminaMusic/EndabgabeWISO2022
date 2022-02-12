/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
var DoenerTrainer;
(function (DoenerTrainer) {
    let formData;
    let employees = [];
    let taskPositions = [];
    let theMenu = ["Döner", "Yufka", "Lahmacun"];
    let allIngredients = ["Salat", "Zwiebel", "Mais", "Tomaten", "Kraut", "Dönerfleisch", "Hackfleisch"];
    let completeOrder = [];
    let choosenIngredients = [];
    let FEELING;
    (function (FEELING) {
        FEELING[FEELING["HAPPY"] = 0] = "HAPPY";
        FEELING[FEELING["ANGRY"] = 1] = "ANGRY";
        FEELING[FEELING["SLEEPY"] = 2] = "SLEEPY";
    })(FEELING = DoenerTrainer.FEELING || (DoenerTrainer.FEELING = {}));
    let TASK;
    (function (TASK) {
        TASK[TASK["BAR"] = 0] = "BAR";
        TASK[TASK["PREPARE"] = 1] = "PREPARE";
        TASK[TASK["ORDER"] = 2] = "ORDER";
        TASK[TASK["REFILL"] = 3] = "REFILL";
        TASK[TASK["BREAK"] = 4] = "BREAK";
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
        //bg canvas
        DoenerTrainer.crc2.fillStyle = "red";
        DoenerTrainer.crc2.fillRect(0, 0, 1300, 800);
        //border
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.rect(0, 0, 1300, 800);
        DoenerTrainer.crc2.closePath();
        //storage
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.fillRect(780, 20, 480, 150);
        DoenerTrainer.crc2.clearRect(780, 20, 480, 150);
        DoenerTrainer.crc2.fill();
        DoenerTrainer.crc2.closePath();
        //cuttingboard
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.fillRect(270, 20, 500, 150);
        DoenerTrainer.crc2.clearRect(270, 20, 500, 150);
        DoenerTrainer.crc2.fill();
        DoenerTrainer.crc2.closePath();
        //current Order
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.fillRect(30, 20, 230, 300);
        DoenerTrainer.crc2.clearRect(30, 20, 230, 300);
        DoenerTrainer.crc2.fill();
        DoenerTrainer.crc2.closePath();
        //Resting Zone
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.fillRect(30, 330, 230, 130);
        DoenerTrainer.crc2.clearRect(30, 330, 230, 130);
        DoenerTrainer.crc2.fill();
        DoenerTrainer.crc2.closePath();
        //Cashier
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.fillRect(850, 470, 410, 150);
        DoenerTrainer.crc2.clearRect(850, 470, 410, 150);
        DoenerTrainer.crc2.fill();
        DoenerTrainer.crc2.closePath();
        //Entrance
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.fillRect(30, 780, 210, 50);
        DoenerTrainer.crc2.clearRect(30, 780, 210, 50);
        DoenerTrainer.crc2.fill();
        DoenerTrainer.crc2.closePath();
        //bar
        DoenerTrainer.crc2.beginPath();
        DoenerTrainer.crc2.fillRect(30, 470, 810, 200);
        DoenerTrainer.crc2.clearRect(30, 470, 810, 200);
        DoenerTrainer.crc2.fill();
        DoenerTrainer.crc2.closePath();
        //get game infos from html form
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
        corn = capacityIngredients; /Mais
        */
    }
    function update() {
        // console.log(update)    
    }
    function createOrder() {
        // console.log(createOrder)
    }
    function checkOrder() {
        // console.log(checkOrder)
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Main.js.map