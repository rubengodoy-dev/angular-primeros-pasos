import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Ironman',
    'Spiderman',
    'Hulk',
    'Captain America',
    'Thor',
  ];
  public lastHero?: string;

  public removeLastHero(): void {
    this.lastHero = this.heroNames.pop();
  }
}
