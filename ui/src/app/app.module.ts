import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatToolbarModule, MatInputModule} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
