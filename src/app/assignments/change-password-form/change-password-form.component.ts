import { PasswordValidators } from './password.validators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', 
      Validators.required, 
      PasswordValidators.validOldPassword],
      
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
        validator: PasswordValidators.passwordShouldMatch
      });
  }

  get newPassword(){
    return this.form.get('newPassword');
  }
  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

}
