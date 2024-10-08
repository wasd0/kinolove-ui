import {Routes} from '@angular/router';
import {EmptyComponent} from "../components/empty/empty.component";
import {MovieListComponent} from "../components/movie-list/movie-list.component";
import {MovieCardComponent} from "../components/movie-card/movie-card.component";
import {MainPageComponent} from "../components/main-page/main-page.component";
import {LoginComponent} from "../components/form/login/login.component";
import {RegisterComponent} from "../components/form/register/register.component";
import {RoutePath} from "../components/models/routePath";
import {ProfileComponent} from "../components/profile/profile.component";
import {AuthGuard} from "../guard/authGuard";

export const routes: Routes = [
  {
    path: RoutePath.LOGIN,
    component: LoginComponent
  },
  {
    path: RoutePath.MOVIE_LIST,
    component: MovieListComponent
  },
  {
    path: RoutePath.MOVIE_SINGLE,
    component: MovieCardComponent
  },
  {
    path: RoutePath.REGISTER,
    component: RegisterComponent
  },
  {
    path: RoutePath.PROFILE,
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: RoutePath.HOME,
    component: MainPageComponent
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
