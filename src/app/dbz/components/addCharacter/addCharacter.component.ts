import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-addCharacter',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0,
  };

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {
    console.log(this.character);

    if(this.character.name.length===0) return;
    this.onNewCharacter.emit({...this.character});
    this.character.name = '';
    this.character.power = 0;
  }
}
