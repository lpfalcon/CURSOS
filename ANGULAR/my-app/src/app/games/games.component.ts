import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>{{username}}'s Favorite games </h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)" >{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username:string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Game 1',
    },
    {
      id: 2,
      name: 'Game 2',
    },
    {
      id: 3,
      name: 'Game 3',
    },
  ];
  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }
}
