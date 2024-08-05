import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../components/header/header.component";
import {RouterOutlet} from "@angular/router";
import {AuthApi} from "../api/auth-api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [AuthApi],
  imports: [
    FormsModule,
    HeaderComponent,
    RouterOutlet
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'kinolove';
}


