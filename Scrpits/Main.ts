/*
Aufgabe: Endabagbe Döner Trainer
Name: Armina Music
Matrikel: 268021
Datum: 11.02.22
*/
namespace DoenerTrainer {

    let formData: FormData;
    let employees: Employee[] = [];
    let taskPositions: Vector[] = [];

    let theMenu: string[] = ["Döner", "Yufka", "Lahmacun"];
    let allIngredients: string[] = ["Salat", "Zwiebel", "Mais", "Tomaten", "Kraut", "Fleisch"];
    let completeOrder: string[] = [];
    let choosenIngredients: string[] = [];

    export enum MOOD {
        HAPPY,
        ANGRY,
        SLEEPY
    }

    export enum TASK {
        BAR,
        PREPARE,
        ORDER,
        REFILL 
    }

    window.addEventListener("load", hdndlLoad);

    export let crc2: CanvasRenderingContext2D;

    function hdndlLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = canvas.getContext("2d")!;
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".startButton");
        startButton.addEventListener("pointerup", startGame);

        drawDoenerBude();
        window.setInterval(update, 1000);
    }

    function startGame(): void {
        formData = new FormData(document.forms[0]);
        getSettings();

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        body.removeChild(form);
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.classList.remove("hidden");
    }


    function drawDoenerBude(): void {

        //white bg canvas
        crc2.fillStyle = "white";
        crc2.fillRect(0, 0, 800, 600);

        //border
        crc2.beginPath();
        crc2.rect(0, 0, 800, 600);

        //game infos
        

        //customer
        crc2.moveTo(0, 500);
        crc2.lineTo(800, 500);
        crc2.stroke();

        //bar

        //cuttingboard

        //cashier

        //storage
    }


    function clickIngredient(): void {
        //
    }

    function getSettings(): void {
        formData = new FormData(document.forms[0]);
        let employeeAmount: number;
        let employeeRestTime: number;
        let customerAmount: number;
        let stockCapacity: number;
        let containerCapacity: number;

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


    function update(): void {
        // console.log("Update")    
    }

    function createOrder(): void {
        //
    }

    function checkOrder(): void {
        //
    }
    
};