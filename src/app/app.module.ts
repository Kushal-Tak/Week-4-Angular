import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import {MatChipsModule} from '@angular/material/chips';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { ChartsModule } from 'ng2-charts'
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartModule, HIGHCHARTS_MODULES }from 'angular-highcharts';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
      Screen1Component,
    Screen2Component,
    Screen3Component,
    DashboardComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    HttpClientModule,
    ChartModule,
    FormsModule, 
    ReactiveFormsModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
