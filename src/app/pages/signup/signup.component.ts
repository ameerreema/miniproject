import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { AuthService } from 'src/app/shared/auth.service';
// import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  email :  string = '';
  password : string = '';
  
  constructor(private auth :AuthService){}

  register()
  {
    if(this.email == ''){
      alert('please enter email')
       return;
    }
    if(this.password == ''){
      alert('please enter password')
       return;
    }
   
       
    this.auth.register(this.email,this.password);
    this.email = '';
    this.password = '';
    
  }
}
