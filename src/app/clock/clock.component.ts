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
<<<<<<< HEAD
    let a = 27
    let b = 30
=======
    let a = 23
    let b = 40
>>>>>>> feature
  }

}
