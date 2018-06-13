import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { PieChartComponent } from './shared/piechrart/piechrart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
