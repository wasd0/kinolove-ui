import {Routes} from '@angular/router';
import {LoginComponent} from "../form/login.component";
import {EmptyComponent} from "../empty/empty.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
