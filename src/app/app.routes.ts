import {Routes} from '@angular/router';
import {LoginComponent} from "../form/login.component";
import {EmptyComponent} from "../empty/empty.component";
import {MovieListComponent} from "../movie-list/movie-list.component";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {MainPageComponent} from "../main-page/main-page.component";
import {RegisterComponent} from "../form/register.component";

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
