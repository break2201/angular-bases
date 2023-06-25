import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})

export class DbzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7000
        }
    ];

    obtenerCharacter( character: Character ) {

        // console.log( 'New character from Main: ', character );
        const newCharacter: Character = {
            id: uuid(),
            name: character.name,
            power: character.power
        }
        this.characters.push( newCharacter );

    }

    // eliminarIdFromList( id: number ) {

    //     console.log('Id:', id);
    //     this.characters.splice(id, 1);

    // }
    deleteCharacterById(id: string) {

        this.characters = this.characters.filter( character => character.id !== id )

    }

}