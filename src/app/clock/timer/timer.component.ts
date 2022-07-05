import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {


  // @ts-ignore
  @Input() hours : Observable<any>
  // @ts-ignore
  @Input() minutes : Observable<any>
  // @ts-ignore
  @Input() seconds : Observable<any>


  constructor() { }

  ngOnInit(): void {
  }

}
