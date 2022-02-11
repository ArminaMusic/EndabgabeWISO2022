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

    let allMenu: string[] = ["Döner", "Yufka", "Lahmacun"];
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
        ORDER
        REFILL, 
    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];

    function handleLoad(_event: Event): void {
    
    }

    
    function update(): void {
        // console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    
    }
    
};