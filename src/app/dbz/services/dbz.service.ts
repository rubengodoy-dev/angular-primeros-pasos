import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krilling', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'GokuF', power: 500 },
  ];

  onNewCharacterEventHandler(character: Character): void {
    const newCharacter = { id: uuid(), ...character };

    this.characters.unshift(newCharacter);
  }

  onDeleteByIdEventHandler(id: string): void {
    this.characters = this.characters.filter((x) => x.id != id);
  }
}
