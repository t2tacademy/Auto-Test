import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { QuestionsComponent } from './questions/questions.component';
import { CardComponent } from './shared/card/card.component';
import { ResultsComponent } from './results/results.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {CommonModule} from '@angular/common';
import {EmailService} from '../api/services/email.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    DataEntryComponent,
    QuestionsComponent,
    CardComponent,
    ResultsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule,
      CommonModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
