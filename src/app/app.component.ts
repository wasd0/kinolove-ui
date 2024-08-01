import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
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


