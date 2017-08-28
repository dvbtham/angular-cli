import { CoursesService } from './course.service';
import { Component } from '@angular/core';
@Component({
    selector: "courses",
    template: `
        {{ text | summary : 10}} <br>
    `
})
export class CoursesComponent{
    text = "Culpa elit enim aliquip amet magna minim culpa laborum sunt minim pariatur voluptate. Mollit amet irure ipsum laboris labore eu quis esse aliquip. Qui occaecat id do est do est eiusmod. Consequat elit magna fugiat aliquip proident nulla deserunt eiusmod qui consequat voluptate et sit sunt."
}