import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormsModule,
    LoginComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'kinolove';
}


