import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  
  RegisterForm: FormGroup;
  constructor(

    private formBuilder: FormBuilder,
    private userservice : UserService
  ) { }

  submitted = false; 
 ngOnInit() {

    this.RegisterForm = this.formBuilder.group({
      FirstName: '',
      LastName: '',
      email:'',
      password: '',
    })

  }

    onSubmit() {
    this.submitted = true;

    this.Registerfunction(
      this.RegisterForm.value['FirstName'],
      this.RegisterForm.value['LastName'],
      this.RegisterForm.value['email'],
      this.RegisterForm.value['password']);
    }
    async Registerfunction(FirstName : string, LastName: string, email: string, password : string){
      this.userservice.signup(FirstName, LastName, email, password)
 
  }

}
