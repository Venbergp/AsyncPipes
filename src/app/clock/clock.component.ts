import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit {

  date = new Date()

  hours = this.date.getHours()
  hours$ = new BehaviorSubject(this.hours)
  minutes = this.date.getMinutes()
  minutes$ = new BehaviorSubject(this.minutes)
  seconds = this.date.getSeconds()
  seconds$ = new BehaviorSubject(this.seconds)


  addSecond = () => {
    setTimeout(() => {

      this.seconds += 1
      if (this.seconds == 60) {
        this.seconds = 0
        this.minutes += 1
        if (this.minutes == 60) {
          this.minutes = 0
          this.hours += 1
          if (this.hours == 24) {
            this.hours = 0
          }
        }
      }

      this.seconds$.next(this.seconds)
      this.minutes$.next(this.minutes)
      this.hours$.next(this.hours)

      this.addSecond()
    }, 1000)
  }



  constructor() { }

  ngOnInit(): void {
    this.addSecond()
  }

}
