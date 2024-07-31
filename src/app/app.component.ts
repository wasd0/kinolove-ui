import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./form/login.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormsModule,
    LoginComponent,
    HeaderComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'kinolove';
}


