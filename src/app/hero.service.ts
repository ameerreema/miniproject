import { Injectable } from '@angular/core';
// import { single } from 'rxjs';
import { data } from 'src/assets/data';
// import { FrusinglepageComponent } from './pages/frusinglepage/frusinglepage.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  giveData(){
    return data; 
}

  

}
