import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { AlertService } from '../../services/alert.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

   public requestLogin: RequestLogin;

   constructor(
      private loginService: LoginService,
      private alertService: AlertService
    ){}

   ngOnInit(): void {
       this.requestLogin = new RequestLogin();
   }

   public doLogin(): void{
    this.loginService.doLogin(this.requestLogin).subscribe({
      next: (data) => {
        this.alertService.info("Funcionalidade ainda não implentada!");
        console.log(data);
      },  
      error: (httpError) => {
        this.alertService.error(httpError.error.message);
        console.log(httpError);
      }
    })
   }

}
