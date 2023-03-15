import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {
  
  constructor(private router:Router,private hero:HeroService){}
  plants=this.hero.giveData();
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/single']);
  }
  // plants = data
  // ngOninit():void
// {
  // this.plants = data
// }
// constructor(private router:Router,private hero : HeroService)
// {}
// plants=this.hero.giveData();
// gotoHere(id:any)
// {
  // localStorage.setItem('id',id);
  // this.router.navigate(['/single']);
// }

}