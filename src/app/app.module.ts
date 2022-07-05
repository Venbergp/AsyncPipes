import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipComponent } from './hello/hello.component';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './clock/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    ClockComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
