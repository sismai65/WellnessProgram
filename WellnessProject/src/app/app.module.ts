import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MdDatepickerModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MdIconModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import {MdMenuModule} from '@angular/material';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { routes } from './app-routing/routes';

import { ChallengeService } from './challenge.service';
import { TeamService } from './team.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';


import 'hammerjs';
import { AppComponent } from './app.component';
import { SignupComponent, PasswordMatcher } from './signup/signup.component';
import { HomePageUserComponent } from './home-page-user/home-page-user.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';
//import { HomeComponent } from './home/home.component';
//import { HomePageComponent } from './home-page/home-page.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { ChallengeDetailsUserComponent } from './challenge-details-user/challenge-details-user.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { ChallengesListAdminComponent } from './challenges-list-admin/challenges-list-admin.component';
import { SigninComponent } from './signin/signin.component';
import {MailService} from "./mail.service";
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninUserComponent } from './signin-user/signin-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';







@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
   // HomeComponent,
    //HomePageComponent,
    HomePageUserComponent,
    HomePageAdminComponent,
    ChallengeComponent,
    AddChallengeComponent,
    ChallengeDetailComponent,
    ChallengeEditComponent,
    TeamComponent,
    TeamDetailComponent,
    TeamCreateComponent,
    TeamEditComponent,
    UserComponent,
    HeaderComponent,
    ChallengesListComponent,
    ChallengeDetailsUserComponent,
    TeamsListComponent,
    ChallengesListAdminComponent,
    SigninComponent,
    WelcomeComponent,
    SigninUserComponent,
    DashboardComponent,





  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    FlexLayoutModule,
    CommonModule,
    AppRoutingModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MdIconModule,
    MdTabsModule,
    RoundProgressModule,
    MdMenuModule,
    FlashMessagesModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ChallengeService,
    TeamService,
    AuthenticationService,
    UserService,
    MailService,
    PasswordMatcher,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
   ],
  bootstrap: [AppComponent]
})


export class AppModule { }
