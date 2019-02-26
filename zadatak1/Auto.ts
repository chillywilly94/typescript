export class Auto {
    protected brTockova: number;
    protected snagaMotora: number;
    protected brVrata: number;
    protected brzina: number;
    protected model: string;

    constructor(model: string, brzina: number, brTockova: number, snagaMotora: number, brVrata: number){
        this.model = model;
        this.brzina = brzina;
        this.brTockova = brTockova;
        this.snagaMotora = snagaMotora;
        this.brVrata = brVrata;

    }

}