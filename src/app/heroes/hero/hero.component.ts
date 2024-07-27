import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: string = '45';

  public changeName(): void {
    this.name = 'NOMBRE CAMBIADO';
  }

  public changeAge(): void {
    this.age = '38';
  }
}
