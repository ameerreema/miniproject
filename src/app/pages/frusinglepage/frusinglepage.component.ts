import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-frusinglepage',
  templateUrl: './frusinglepage.component.html',
  styleUrls: ['./frusinglepage.component.css']
})
export class FrusinglepageComponent {
  constructor(private hero : HeroService){}
  data=this.hero.giveData()
  frusinglepage :any
  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.frusinglepage=this.data.filter(e=>e.id==id),
    console.log("name",this.frusinglepage)
  }
}
