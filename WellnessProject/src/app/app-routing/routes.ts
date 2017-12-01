import { Routes } from '@angular/router';
import { WelcomeComponent} from "../welcome/welcome.component";
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from "../signin/signin.component";
import { SigninUserComponent} from "../signin-user/signin-user.component";
import { HomePageUserComponent } from "../home-page-user/home-page-user.component";
import { HomePageAdminComponent} from "../home-page-admin/home-page-admin.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ChallengeComponent } from '../challenge/challenge.component';
import { ChallengeDetailComponent } from '../challenge-detail/challenge-detail.component';
import { ChallengeDetailsUserComponent } from '../challenge-details-user/challenge-details-user.component';
import { AddChallengeComponent } from '../add-challenge/add-challenge.component';
import { ChallengeEditComponent } from '../challenge-edit/challenge-edit.component';
import { ChallengesListComponent } from '../challenges-list/challenges-list.component'
import { ChallengesListAdminComponent} from "../challenges-list-admin/challenges-list-admin.component";
import { TeamComponent } from '../team/team.component';
import { TeamsListComponent } from "../teams-list/teams-list.component";
import { TeamCreateComponent } from '../team-create/team-create.component';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { TeamEditComponent } from '../team-edit/team-edit.component';
import { UserComponent } from '../user/user.component';


export const routes : Routes = [
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
	{ path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signin-user', component: SigninUserComponent },
  { path: 'home-page-user/:id', component: HomePageUserComponent },
  { path: 'home-page-user/:id/dashboard', component: DashboardComponent },
  { path: 'home-page-admin/:id', component: HomePageAdminComponent},
	{ path: 'home-page-admin/:id/challenges', component: ChallengeComponent },
	{ path: 'home-page-admin/:id/challenges/:idC', component: ChallengeDetailComponent},
  { path: 'home-page-user/:id/challenges/:idC', component: ChallengeDetailsUserComponent},
	{ path: 'add-challenge', component: AddChallengeComponent },
  { path: 'home-page-admin/:id/add-challenge', component: AddChallengeComponent },
	{ path: 'home-page-admin/:id/challenges/:idC/challenge-edit', component: ChallengeEditComponent },
  { path: 'home-page-user/:id/challenges', component: ChallengesListComponent},
  { path: 'challenges-list-admin', component: ChallengesListAdminComponent},
	{ path: 'home-page-admin/:id/teams', component: TeamComponent },
  { path: 'home-page-admin/:id/challenges/teams-list/:idC', component: TeamsListComponent },
	{ path: 'home-page-admin/:id/team-create', component: TeamCreateComponent },
  { path: 'home-page-admin/:id/teams/:idT', component: TeamDetailComponent },
	{ path: 'home-page-admin/:id/team-edit/:idT', component: TeamEditComponent },
	{ path: 'users', component: UserComponent },
	{ path: 'home-page-admin/:id/team-edit/:idT/users', component: UserComponent }
];


