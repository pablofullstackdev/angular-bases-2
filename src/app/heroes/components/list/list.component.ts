import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesNames: string[] = [
    'Spoderman',
    'Ronmen',
    'Holk',
    'Capten Murka',
  ];
  public deletedHero?: string;

  deleteLastHero = () => {
    this.deletedHero = this.heroesNames.pop();
    console.log(this.deletedHero);
  };
}
