import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Credentials } from "../../modules/credentials";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  search: string;
  validationForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.validationForm = formBuilder.group({
      usernameInput: [null, Validators.required],
      passwordInput: [null, Validators.required],
      RememberMe: new FormControl(false)
    });
  }

  ngOnInit() {}

  searchGames() {
    console.log(this.search);

    this.router.navigate([`/search-results/${this.search}`]);
  }

  get input() {
    return this.validationForm.get("usernameInput");
  }
  get passwordFormEx() {
    return this.validationForm.get("passwordInput");
  }

  authenticate() {
    let credentials: Credentials = {
      username: this.validationForm.controls["usernameInput"].value,
      password: this.validationForm.controls["passwordInput"].value
    };

    this.userService.login(credentials);
  }
}
