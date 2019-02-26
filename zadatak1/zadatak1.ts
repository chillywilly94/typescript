import { Ikretanje } from "./interface";
import { Auto } from "./Auto";

class BMW extends Auto implements Ikretanje {
    
    

    constructor(model: string, brzina: number, brTockova: number, snagaMotora: number, brVrata: number){
        super(model, brzina, brTockova, snagaMotora, brVrata);
        
    }

    kretanje() {
        console.log(`BMW se krece ${this.brzina} km/h`);
    }
}

class Mercedes extends Auto implements Ikretanje {
    
    

    constructor(model: string, brzina: number, brTockova: number, snagaMotora: number, brVrata: number){
        super(model, brzina, brTockova, snagaMotora, brVrata);
        
    }

    kretanje() {
        console.log(`Mercedes se krece brzinom ${this.brzina} km/h`);
    }
}

class Seat extends Auto implements Ikretanje {
    
    constructor(model: string, brzina: number, brTockova: number, snagaMotora: number, brVrata: number){
        super(model, brzina, brTockova, snagaMotora, brVrata);
        
    }

    kretanje() {
        console.log(`Seat se krece brzinom ${this.brzina} km/h`);
    }
}

let bmw = new BMW("M320", 150, 4, 100, 5);
let mercedes = new Mercedes("S class", 140, 4, 100, 5);
let seat = new Seat("Ateca", 100, 4, 100, 5);
bmw.kretanje();
mercedes.kretanje();
seat.kretanje();