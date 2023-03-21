import { Injectable } from '@angular/core';
// import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
// import { addDoc, Firestore } from '@angular/fire/firestore';
// import { Router } from '@angular/router';
// import { doc ,setDoc } from '@firebase/firestore';
// import { single } from 'rxjs';
import { data } from 'src/assets/data';
// import { FrusinglepageComponent } from './pages/frusinglepage/frusinglepage.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(){}
  




  giveData(){
    return data; 
}

}
