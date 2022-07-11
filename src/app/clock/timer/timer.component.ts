import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {


  // @ts-ignore
  date = new Date()
  @Input() timer : any


  constructor() {

  }

  normDate(x : string) : string{
    if (x.length < 2){
      return '0' + x
    } else {
      return x
    }
  }

  ngOnInit(): void {
    if (this.timer == null) {
      this.timer = {hours: this.date.getHours(), minutes : this.date.getMinutes(), seconds: this.date.getSeconds()}
    }
  }

}
