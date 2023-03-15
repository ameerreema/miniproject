import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import {LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FlowerComponent } from './pages/flower/flower.component';
import { FruitComponent } from './pages/fruit/fruit.component';
import { FrusinglepageComponent } from './pages/frusinglepage/frusinglepage.component';
import { FlosinglepageComponent } from './pages/flosinglepage/flosinglepage.component';
import { ServicesComponent } from './pages/services/services.component';
import { PaymentComponent } from './pages/payment/payment.component';
const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'plants',component:PlantsComponent
  },
  {
    path:'single',component:SinglepageComponent
  },
  {
    path:'login',component:LoginComponent
  },
  
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'flower',component:FlowerComponent
  },
  {
    path:'fruit',component:FruitComponent
  },
  {
     path:'frusinglepage',component:FrusinglepageComponent
  },
  {
    path:'flosinglepage',component:FlosinglepageComponent
 },
 {
  path:'services',component:ServicesComponent
 },
 {
  path:'payment',component:PaymentComponent
 }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
