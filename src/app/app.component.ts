import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items :any[] = [];
  items$ = new BehaviorSubject(this.items);

  add() {
    this.items.push({title:  Math.random()})
    this.items$.next(this.items);
  }

}
