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
    let allIngredients = ["Salat", "Zwiebel", "Mais", "Tomaten", "Kraut", "Dönerfleisch", "Hackfleisch", "Soße"];
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
        //function to build Dönerbude
        drawDoenerBude();
        window.setInterval(update, 1000);
    }
    //function to start the game
    function startGame() {
        formData = new FormData(document.forms[0]);
        //play getSettings funktion to get game settings
        getSettings();
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        let canvas = document.querySelector("canvas");
        //hide setting page
        canvas.classList.remove("hidden");
    }
    //function to get setting drom FromDate to set up the game
    function getSettings() {
        formData = new FormData(document.forms[0]);
        let employeeAmount;
        let employeeRestTime;
        let customerAmount;
        let stockCapacity;
        let containerCapacity;
        //read imput from FormData
        employeeAmount = Number(formData.get("employeeAmount"));
        employeeRestTime = Number(formData.get("restTime"));
        customerAmount = Number(formData.get("customerAmount"));
        stockCapacity = Number(formData.get("stockCapacity"));
        containerCapacity = Number(formData.get("containerCapacity"));
        /*
        corn = capacityIngredients; /Mais
        */
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
    // function to build a Fooditem from order 
    function buildFoodItem() {
        //clickTheke -> to use
        //check if full 
        //yes --> function: build "FoodItem"
        //no --> go to Storage and refill
        //check if Storage is full
        //yes --> take and go to "cuttingBoard" and cut items (Task-Time -> Countdown)
        //no --> funktion : clickIngredient - in Storage -> to refill (Task-Time -> Countdown)
    }
    // function to refill Storage of Ingredients
    function clickIngredient() {
        //        
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