import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {

  constructor(private hero : HeroService){}
  data=this.hero.giveData()
  single :any
  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.single=this.data.filter(e=>e.id==id),
    console.log("name",this.single)
  }
  
  }
  

