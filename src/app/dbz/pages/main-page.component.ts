import { Component, OnInit } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: [ 'main-page.component.css' ]
})

export class MainPageComponent implements OnInit {

    public characters: Character[] = [
        {
            name: 'Krillin',
            power: 1000
        },
        {
            name: 'Goku',
            power: 9500
        },
        {
            name: 'Vegeta',
            power: 7000
        }
    ];

    constructor() {}

    ngOnInit(): void {
        
    }

    obtenerCharacter( character: Character ) {

        // console.log( 'New character from Main: ', character );
        this.characters.push( character );

    }

    eliminarIdFromList( id: number ) {

        console.log('Id:', id);
        this.characters.splice(id, 1);

    }

}
