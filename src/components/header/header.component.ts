import {Component} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {routes} from "../../app/app.routes";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {RoutePath} from "../models/routePath";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  public search: string = ""

  protected readonly routes = routes;
  protected readonly navigator = navigator;
  protected readonly RoutePath = RoutePath;

  goProfile() {
    const currUsr = localStorage.getItem('user')!;
    this.router.navigate([`user/${currUsr}`])
  }
}
