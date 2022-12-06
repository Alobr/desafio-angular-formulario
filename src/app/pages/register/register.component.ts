import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstNameControl = new FormControl('', [Validators.required, Validators.minLength(3)])
  lastNameControl = new FormControl('', [Validators.required])
  emailControl = new FormControl('', [Validators.email, Validators.required])
  passwordControl = new FormControl('', [Validators.minLength(5), Validators.required])

  registerForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl
  })

  onSubmit() {
    console.log(this.registerForm.value);

  }

}
