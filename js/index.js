"use strict";

class GoedDoel {
    #opbrengst = 0;
    stort(bedrag){
        if(bedrag > 0){
            this.#opbrengst += bedrag;
        }
    }
    getOpbrengst() {
        return this.#opbrengst;
    }
}
/*
const komOpTegenKanker = new GoedDoel();
komOpTegenKanker.stort(100);
komOpTegenKanker.stort(200);
console.log(komOpTegenKanker.getOpbrengst());
const cliniClowns = new GoedDoel();
cliniClowns.stort(500);
console.log(cliniClowns.getOpbrengst());
*/
class DVDSpeler {
    #snelheid = 0;
    start() {
    this.#snelheid = 1;
    console.log("Spelen op snelheid", this.#snelheid);
    }
    spoelDoor() {
    if (this.#snelheid < 0) {
    this.#snelheid = 2;
    } else {
    this.#snelheid *= 2;
    }
    console.log("Doorspoelen op snelheid", this.#snelheid);
    }
    spoelTerug() {
    if (this.#snelheid > 0) {
    this.#snelheid = -2;
    } else {
    this.#snelheid *= 2;
    }
    console.log("Terugspoelen op snelheid", this.#snelheid);
    }
   }
   /*
const speler = new DVDSpeler();
speler.start();
speler.spoelDoor();
speler.spoelDoor();
speler.spoelDoor();
speler.spoelTerug();
speler.spoelTerug();
speler.spoelDoor();
speler.start();
*/
class HogerLager {
    #teRadengetal = Math.floor(Math.random() * 10) + 1;
    #aantalPogingen = 0;
    gok(getal){
        while (getal !== this.#teRadengetal){
            this.#aantalPogingen++;
            if (getal < this.#teRadengetal){
                getal = Number(prompt("Hoger"));  
            } else if (getal > this.#teRadengetal){
                getal = Number(prompt("Lager")); 
            }
        }
    }
    getAantalPogingen(){
        alert(`${this.#aantalPogingen} pogingen.`);
    }
}
/*
const speler = new HogerLager();
speler.gok(Number(prompt("Geef een getal tussen 1 en 10 in:")));
speler.getAantalPogingen();
*/

class Bankrekening {
    #saldo = 0;
    stort(bedrag){
        this.#saldo += bedrag;
    }
    haalAf(bedrag){
        this.#saldo -= bedrag;
        if(this.#saldo < 0){
            console.log("saldo kan niet negatief zijn");
            this.#saldo = 0;
        }
    }
    getSaldo(){
        console.log(this.#saldo);
    }
}
/*
const rekening = new Bankrekening();
rekening.stort(600);
rekening.haalAf(500);
rekening.getSaldo();
rekening.stort(500);
rekening.haalAf(6000);
rekening.getSaldo();
*/

class Rechthoek {
    #lengte;
    #breedte;
    constructor(lengte, breedte){
        this.#lengte = lengte;
        this.#breedte = breedte;
        console.log(this.#lengte + ", " + this.#breedte);
    }
    getOmtrek(){
        return (this.#lengte + this.#breedte) * 2;
        
    }
    getOppervlakte(){
        return this.#lengte * this.#breedte;
        
    }
}
/*
const rechthoek = new Rechthoek(5,8);
console.log(rechthoek.getOmtrek());
console.log(rechthoek.getOppervlakte());
*/

class Meter {
    #afstand;
    constructor(afstand){
        this.#afstand = afstand;
    }
    naarInches(){
        return this.#afstand * 39.37;
    }
    naarYards(){
        return this.#afstand * 1.0936;
    }
}
/*
const meter = new Meter(1);
console.log(meter.naarInches());
console.log(meter.naarYards());
*/

class Vierkant {
    #zijde;
    constructor(zijde){
        this.#zijde = zijde;
    }
    getOmtrek(){
        return this.#zijde * 4;
    }
    getOppervlakte(){
        return this.#zijde * this.#zijde;
    }
}

const vierkanten = [
    new Vierkant(5),
    new Vierkant(6),
    new Vierkant(7),
    new Vierkant(8),
    new Vierkant(9),
    new Vierkant(10)
]
/*
for (const vierkant of vierkanten){
    console.log("Omtrek " + vierkant.getOmtrek());
    console.log("Oppervlakte " + vierkant.getOppervlakte());
}
*/

