import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  firstname = 'tham';
  contactMethods = [
    { id: 1, name: 'Mail'},
    { id: 2, name: 'Phone'}
  ]
  constructor() { }

  log(ngModel){
    console.log(ngModel);
  }
  submit(f){
    console.log(f.value);
  }

}
