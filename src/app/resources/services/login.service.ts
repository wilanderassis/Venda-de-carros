import { ResponseLogin } from './../models/ResponseLogin';
import { RequestLogin } from './../models/RequestLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(`http://localhost:8080/api/login`, requestLogin)
  }
}
