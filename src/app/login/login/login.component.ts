import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    FormsModule,
    NgIf
  ]
})
export class LoginComponent {
  public username: string = ""
  public password: string = ""

  public showMessage  =  (username: string, password: string) => {
    alert(username+":"+password);
  }
}
