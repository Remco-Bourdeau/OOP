"use strict";
class Track {
    #titel;
    constructor (titel){
        this.#titel = titel;
    }
    getTitel() {
        return this.#titel;
    }
}

class Album {
    #titel;
    #jaar;
    #tracks = [];
    constructor(titel, jaar){
        this.#titel = titel;
        this.#jaar = jaar;
    }
    voegTrackToe(track){
        this.#tracks.push(track);
    }
    getTitel(){
        return this.#titel;
    }
    getJaar(){
        return this.#jaar;
    }
    getTracks(){
        return this.#tracks;
    }
}

class Artiest {
    #naam;
    #albums = [];
    constructor(naam){
        this.#naam = naam;
    }
    voegAlbumToe(album){
        this.#albums.push(album);
    }
    getNaam(){
        return this.#naam;
    }
    getAlbums(){
        return this.#albums;
    }
}

const album1 = new Album("Stoney & Meatloaf", 1971);
album1.voegTrackToe(new Track("She Waits By The Window"));
album1.voegTrackToe(new Track("It Takes All Kinds of People"));
const album2 = new Album("Bat out of hell", 1977);
album2.voegTrackToe(new Track("Bat out of Hell"));
album2.voegTrackToe(new Track("Heaven can wait"));
const artiest = new Artiest("Meat Loaf");
artiest.voegAlbumToe(album1);
artiest.voegAlbumToe(album2);
console.log(artiest.getNaam());
for (const album of artiest.getAlbums()) {
 console.log(album.getTitel(), album.getJaar());
 for (const track of album.getTracks()) {
 console.log(track.getTitel());
 }
}
