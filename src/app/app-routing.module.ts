import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren : () =>
    import('./views/dashborad/dashborad.module').then(
      (m) => m.DashboradModule
    )
  },
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
