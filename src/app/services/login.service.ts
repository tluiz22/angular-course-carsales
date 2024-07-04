import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RequestLogin } from '../resources/models/RequestLogin';
import { ResponseLogin } from '../resources/models/ResponseLogin';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>(
      "http://localhost:8080/api/login", 
      requestLogin);
  }
}
