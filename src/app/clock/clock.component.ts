import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject, interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit {


  timer$ = interval(1000)
    .pipe(map(() => {
      let date = new Date()
      return {hours: date.getHours().toString(), minutes: date.getMinutes().toString(),seconds: date.getSeconds().toString()}
    }))



  constructor() {

  }

  ngOnInit(): void {
    console.log(this.timer$)
    let a = 23
    let b = 30
  }

}
