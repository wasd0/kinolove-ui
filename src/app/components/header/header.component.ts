import {Component} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {routes} from "../../app.routes";
import {RouterLink, RouterLinkActive} from "@angular/router";

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

  public search: string = ""

  protected readonly routes = routes;
  protected readonly navigator = navigator;
}
