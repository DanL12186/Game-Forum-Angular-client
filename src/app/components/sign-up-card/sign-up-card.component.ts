import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// ----- Router
import { Router } from '@angular/router';
// ----- Services
import { UserService } from 'src/app/services/user.service';
// ----- Modules
import { NewUser } from 'src/app/modules/newUser';

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.scss']
})
export class SignUpCardComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private router : Router,
    private formBuilder: FormBuilder,
    private userService: UserService) {
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
    let newUser : NewUser = {
      firstName : this.signupForm.controls['signupFormFirstName'].value,
      lastName : this.signupForm.controls['signupFormLastName'].value,
      username : this.signupForm.controls['signupFormUsername'].value,
      email : this.signupForm.controls['signupFormEmail'].value,
      password : this.signupForm.controls['signupFormPassword'].value,
      role : {
        id : 1,
        roleName : 'user'
      }
    }

    this.userService.signup(newUser);
    this.router.navigateByUrl('/main-page');
  }

}
