import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit{

  // @ts-ignore
  @Input() items: any[] | null;
  @Input('number') number: any



  constructor() { }

  ngOnInit(): void {

  }



}
