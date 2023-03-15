import { Component } from '@angular/core';
// import { data } from 'src/assets/data';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent {
 
  constructor(private router:Router,private hero:HeroService){}
  fruit=this.hero.giveData();
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/frusinglepage']);
  }

}
