import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard',
    loadChildren : () =>
    import('./views/dashborad/dashborad.module').then(
      (m) => m.DashboradModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
