import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-flosinglepage',
  templateUrl: './flosinglepage.component.html',
  styleUrls: ['./flosinglepage.component.css']
})
export class FlosinglepageComponent {
  constructor(private hero : HeroService){}
  data=this.hero.giveData()
  flosinglepage :any
  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.flosinglepage=this.data.filter(e=>e.id==id),
    console.log("name",this.flosinglepage)
  }

}
