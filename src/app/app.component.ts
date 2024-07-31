import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "../form/login.component";
import {HeaderComponent} from "./components/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormsModule,
    LoginComponent,
    HeaderComponent,
    RouterOutlet
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'kinolove';
}


