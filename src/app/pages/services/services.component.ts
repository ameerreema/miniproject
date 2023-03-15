import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {


  constructor(private router:Router,private hero:HeroService){}
  fruit=this.hero.giveData();
  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/payment']);
  }
}
