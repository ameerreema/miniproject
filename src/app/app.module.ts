import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { CardComponent } from './units/card/card.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { FlowerComponent } from './pages/flower/flower.component';

import { FruitComponent } from './pages/fruit/fruit.component';
import { FlosinglepageComponent } from './pages/flosinglepage/flosinglepage.component';
import { FrusinglepageComponent } from './pages/frusinglepage/frusinglepage.component';
import { ServicesComponent } from './pages/services/services.component';
import { SingleoneComponent } from './pages/singleone/singleone.component';
import { PaymentComponent } from './pages/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlantsComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    SinglepageComponent,
    FlowerComponent,
   
    FruitComponent,
    FlosinglepageComponent,
    FrusinglepageComponent,
    ServicesComponent,
    SingleoneComponent,
    PaymentComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
