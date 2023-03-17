import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { doc ,setDoc } from '@firebase/firestore';
// import { single } from 'rxjs';
import { data } from 'src/assets/data';
// import { FrusinglepageComponent } from './pages/frusinglepage/frusinglepage.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private auth:Auth,private router:Router,private hero:Firestore){}

  //signup
  signup(name:string,email:string,password:string){

    createUserWithEmailAndPassword(this.auth,email,password).then((res)=> {
       console.log("Data added successfully")
       this.router.navigate(['/home'])
      }).catch(err=>{
        alert(err)
      })
  }

  //login
login(email:string,password:string){

  createUserWithEmailAndPassword(this.auth,email,password).then((res))=> {
      console.log("data added successfully")
       this.router.navigate(['/home'])
  }).catch(err=>{
    alert(err)
  })

}





  giveData(){
    return data; 
}

  

}
