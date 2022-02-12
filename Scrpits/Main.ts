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
    let allIngredients: string[] = ["Salat", "Zwiebel", "Mais", "Tomaten", "Kraut", "Dönerfleisch", "Hackfleisch"];
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

        //bg canvas
        crc2.fillStyle = "red";
        crc2.fillRect(0, 0, 1300, 800);

        //border
        crc2.beginPath();
        crc2.rect(0, 0, 1300, 800);
        crc2.closePath();

        //storage
        crc2.beginPath();
        crc2.fillRect(780, 50, 480, 150);
        crc2.clearRect(780, 50, 480, 150);
        crc2.fill();
        crc2.closePath();

        //cuttingboard
        crc2.beginPath();
        crc2.fillRect(270, 50, 500, 150);
        crc2.clearRect(270, 50, 500, 150);
        crc2.fill();
        crc2.closePath();

        //cuttent Order
        crc2.beginPath();
        crc2.fillRect(30, 50, 230, 300);
        crc2.clearRect(30, 50, 230, 300);
        crc2.fill();
        crc2.closePath();

        //Cashier
        crc2.beginPath();
        crc2.fillRect(850, 600, 410, 150);
        crc2.clearRect(850, 600, 410, 150);
        crc2.fill();
        crc2.closePath();

        //bar
        crc2.beginPath();
        crc2.fillRect(30, 500, 810, 250);
        crc2.clearRect(30, 500, 810, 250);
        crc2.fill();
        crc2.closePath();
        
        //get game infos from html form
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
        corn = capacityIngredients; /Mais
        */  
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