import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters():Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteByIdEventHandler(id: string): void {
    this.dbzService.onDeleteByIdEventHandler(id);
  }

  onNewCharacterEventHandler(character: Character): void {
    this.dbzService.onNewCharacterEventHandler(character);
  }
}
