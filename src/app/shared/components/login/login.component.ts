import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
  constructor(

    private formBuilder: FormBuilder,
    private userservice : UserService
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    })
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.loginFunction(
      this.loginForm.value['username'],
      this.loginForm.value['password']);
    }

    async loginFunction(username : string, password : string){
      this.userservice.login(username, password)
    }

}
