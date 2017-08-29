import { IFavoriteChangedArg } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   courses = [
     { id: 1 ,name: 'course 1'},
     { id: 2 ,name: 'course 2'},
     { id: 3 ,name: 'course 3'}
   ];
   newCourses;
   onAdd(){
     this.courses.push({ id: 4, name: 'course 4' });
   }
   onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    console.log(this.courses.length);
  }
  onChange(course){
    let index = this.courses.indexOf(course);
    this.courses[index].name = "updated";
  }
  loadCourses(){
    this.newCourses = [
      { id: 1 ,name: 'course 1'},
      { id: 2 ,name: 'course 2'},
      { id: 3 ,name: 'course 3'}
    ];
  }
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
