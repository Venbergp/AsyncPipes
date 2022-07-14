import {Component, ContentChild, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TooltipComponent} from "./hello/hello.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  items :any[] = [];
  number = 1

  @ContentChild(TooltipComponent) comp: any



  add() {
    this.items.push({title:  Math.random()})
    this.items = Object.assign([],this.items)
    console.log(this.items)
  }


  add1() {
    this.number += 1
    console.log(this.number)
  }

  ngOnInit() {
  }

}
