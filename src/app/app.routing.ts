import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { SignupComponent } from './signup/signup.component';
// import { LandingComponent } from './landing/landing.component';
// import { LoginComponent } from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {DataEntryComponent} from './data-entry/data-entry.component';
import {QuestionsComponent} from './questions/questions.component';
import {ResultsComponent} from './results/results.component';

const routes: Routes = [
    { path: 'welcome',             component: WelcomeComponent },
    { path: 'data-entry',             component: DataEntryComponent },
    { path: 'questions',             component: QuestionsComponent },
    { path: 'results',             component: ResultsComponent },
    // { path: 'home',             component: HomeComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'register',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    // { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
