import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent {

  constructor(private router:Router,private hero:HeroService){}
  flower=this.hero.giveData();
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/flosinglepage']);
  }
}