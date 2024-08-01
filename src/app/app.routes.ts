import {Routes} from '@angular/router';
import {LoginComponent} from "../components/form/login.component";
import {EmptyComponent} from "../components/empty/empty.component";
import {MovieListComponent} from "../components/movie-list/movie-list.component";
import {MovieCardComponent} from "../components/movie-card/movie-card.component";
import {MainPageComponent} from "../components/main-page/main-page.component";
import {RegisterComponent} from "../components/form/register.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'movie',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    component: MovieCardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
