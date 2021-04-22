import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DmitryComponent } from './dmitry/dmitry.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"dmitry",
    component: DmitryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
