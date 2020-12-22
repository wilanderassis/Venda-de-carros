import { LoginService } from './../../resources/services/login.service';
import { RequestLogin } from './../../resources/models/RequestLogin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  requestLogin: RequestLogin

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin()
  }

  doLogin() {
    this.loginService.doLogin(this.requestLogin)
      .subscribe((data) => {
        console.log(data);
      },
        error => {
          console.log(error);
        })
  }

}
