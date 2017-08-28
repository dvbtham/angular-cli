import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
 @Input("is-favorite") isFavorite: boolean
 @Output() change = new EventEmitter();
  constructor() { }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}
export interface IFavoriteChangedArg{
  newValue:boolean
}

