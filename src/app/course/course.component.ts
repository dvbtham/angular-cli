import { UsernameValidators } from './../signup-form/username.validators';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)], UsernameValidators.shouldBeUnique],
      contact: fb.group({
        email: ['', [Validators.required, Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
      }),
      topics: fb.array([])
    });
  }

  addTopic(name) {
    this.form.value.topics.push(name.value);
  }
  removeTopic(topic) {
    let index = this.form.value.topics.indexOf(topic);
    this.form.value.topics.splice(index, 1);
  }
}
