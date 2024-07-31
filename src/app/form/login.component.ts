import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FormComponent} from "./form.component";
import {FormField} from "./FormField";
import {InputType} from "./InputType";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  imports: [
    FormsModule,
    NgIf
  ]
})
export class LoginComponent extends FormComponent {
  private pwdValid = () => {
    return this.passwordField.value !== undefined && this.passwordField.value.length >= 8 || this.passwordField.value === undefined
  }

  private usrValid = () => {
    return this.usernameField.value !== undefined && this.usernameField.value.length >= 5 || this.usernameField.value === undefined
  }

  private readonly usernameField: FormField = {
    type: InputType.TEXT,
    name: 'username',
    placeholder: 'Enter your username',
    isRequired: true,
    minLength: 5,
    isValid: this.usrValid
  }



  private readonly passwordField: FormField = {
    type: InputType.PASSWORD,
    name: 'password',
    placeholder: 'Enter your password',
    isRequired: true,
    minLength: 8,
    isValid: this.pwdValid
  }

  override fields: FormField[] = [this.usernameField, this.passwordField]
  override title: string = "Login";
  override description: string = "Enter your username and password";

  override onSubmit() {
    alert(this.usernameField.value+":"+this.passwordField.value)
  }}
