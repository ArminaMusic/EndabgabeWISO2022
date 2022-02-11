namespace DoenerTrainer {

    export enum DOENER_EVENT {
        
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