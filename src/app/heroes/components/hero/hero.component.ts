import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 31;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription = () => {
    return `${this.name} - ${this.age} `;
  };

  changeHero = () => (this.name = 'Paco');
  changeAge = () => (this.age = 37);

  resetForm = () => {
    this.name = 'ironman';
    this.age = 31;
  };
}
