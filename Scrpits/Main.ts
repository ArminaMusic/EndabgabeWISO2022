/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 12.02.22
*/
namespace DoenerTrainer {

    let formData: FormData;
    let employees: Employee[] = [];
    let taskPositions: Vector[] = [];

    let theMenu: string[] = ["Döner", "Yufka", "Lahmacun"];
    let allIngredients: string[] = ["Salat", "Zwiebel", "Mais", "Tomaten", "Kraut", "Dönerfleisch", "Hackfleisch", "Soße"];
    let completeOrder: string[] = [];
    let choosenIngredients: string[] = [];

    export enum FEELING {
        HAPPY,
        ANGRY,
        SLEEPY
    }

    export enum TASK {
        BAR,
        PREPARE,
        ORDER,
        REFILL,
        BREAK
    }

    window.addEventListener("load", hdndlLoad);

    export let crc2: CanvasRenderingContext2D;

    function hdndlLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = canvas.getContext("2d")!;
        //function to build Dönerbude
        drawDoenerBude();
        window.setInterval(update, 1000);

        crc2.canvas.addEventListener('click', function(event){
            var mouseX = event.clientX - crc2.canvas.offsetLeft;
            var mouseY = event.clientY - crc2.canvas.offsetTop;
            var status = document.getElementById('status');
            status.innerHTML = mouseX+" | "+mouseY;
           
        });


        handleCustomers();
    }

    //function to start the game
    function startGame(): void {
        formData = new FormData(document.forms[0]);
        //play getSettings funktion to get game settings
        getSettings();
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.removeChild(form);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        //hide setting page
        canvas.classList.remove("hidden");
    }

    //function to get setting drom FromDate to set up the game
    function getSettings(): void {
        formData = new FormData(document.forms[0]);
        let employeeAmount: number;
        let employeeRestTime: number;
        let customerAmount: number;
        let stockCapacity: number;
        let containerCapacity: number;

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

    function drawDoenerBude(): void {

        //bg canvas
        crc2.fillStyle = "grey";
        crc2.fillRect(0, 0, 1300, 800);

        //border
        crc2.beginPath();
        crc2.rect(0, 0, 1300, 800);
        crc2.closePath();

        //storage
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(780, 20, 480, 150);
        crc2.fill();
        crc2.closePath();

        //cuttingboard
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(270, 20, 500, 150);
        crc2.fill();
        crc2.closePath();

        //current Order
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(30, 20, 230, 300);
        crc2.fill();
        crc2.closePath();

        //Resting Zone
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(30, 330, 230, 130);
        crc2.fill();
        crc2.closePath();

        //Cashier
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(850, 470, 410, 150);
        crc2.fill();
        crc2.closePath();

        //Entrance
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(30, 780, 210, 50);
        crc2.fill();
        crc2.closePath();

        //bar
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(30, 470, 810, 200);
        crc2.fill();
        crc2.closePath();
    }

    //function draw Employees
        //-> Emplyees.ts

    // function to build a Fooditem from order 
    function buildFoodItem(): void {
    //position Employee here
        //clickTheke -> to use
                //check if full 
                    //yes --> function: build "FoodItem"
                    //no --> go to Storage and refill
                        //check if Storage is full
                            //yes --> take and go to "cuttingBoard" and cut items (Task-Time -> Countdown)
                            //no --> funktion : clickIngredient - in Storage -> to refill (Task-Time -> Countdown)
    }

    // function to refill Storage of Ingredients
    function clickIngredient(): void {
        //        
    }

    function update(): void {
        // console.log(update)    
    }

    function createOrder(): void {
        // console.log(createOrder)
    }

    function checkOrder(): void {
        // console.log(checkOrder)
    }
    
}