import { IFavoriteChangedArg } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    title: 'The Master of Angular 2 course is ready!',
    isFavorite: true
  }
  courses = [1,2,3,4];
  onFavoriteChanged(eventArgs: IFavoriteChangedArg){
    console.log('Favorite changed: ', eventArgs);
  }
}
