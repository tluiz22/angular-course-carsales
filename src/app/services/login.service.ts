import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs/internal/Observable';
import { RequestLogin } from '../resources/models/RequestLogin';
import { ResponseLogin } from '../resources/models/ResponseLogin';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
      private httpClient: HttpClient,
      private authService: AuthService
    ) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>(
      "http://localhost:8080/api/login", 
      requestLogin).pipe(
        tap((loginResponse) => this.authService.loginResponse = loginResponse)
      );
  }
}
