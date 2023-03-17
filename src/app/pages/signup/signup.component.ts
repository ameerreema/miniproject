import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name:string=''
  email:string=''
  password:string=''

  constructor(private fs:HeroService){}

  signup(){
    this.fs.signup(this.name,this.email,this.password)
    this.name=''
    this.email=''
    this.password=''
  }

}
