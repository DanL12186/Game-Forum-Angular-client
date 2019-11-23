import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// ----- Services
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.scss']
})
export class SignUpCardComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService
  ) { 
    this.signupForm = formBuilder.group({
      signupFormFirstName: ['', Validators.required],
      signupFormLastName: ['', Validators.required],
      signupFormUsername: ['', Validators.required],
      signupFormEmail: ['', [Validators.email, Validators.required]],
      signupFormPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  register() {
    console.log("Registering");
  }

}
