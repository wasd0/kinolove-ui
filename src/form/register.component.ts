import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FormComponent} from "./form.component";
import {FormField} from "./FormField";
import {InputType} from "./InputType";
import {validatePasswordField, validateUsernameField} from "../util/user/userValidator";

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
export class RegisterComponent extends FormComponent {
  private readonly usernameField: FormField = {
    type: InputType.TEXT,
    name: 'username',
    placeholder: 'Enter your username',
    isRequired: true,
    minLength: 5,
    isValid: () => validateUsernameField(this.usernameField),
  }

  private readonly passwordField: FormField = {
    type: InputType.PASSWORD,
    name: 'password',
    placeholder: 'Enter your password',
    isRequired: true,
    minLength: 8,
    isValid: () => validatePasswordField(this.passwordField),
  }

  private readonly passwordConfirmField: FormField = {
    type: InputType.PASSWORD,
    name: 'passwordConfirm',
    placeholder: 'Confirm password',
    isRequired: true,
    minLength: 8,
    isValid: () => this.passwordConfirmField.value === this.passwordField.value,
  }

  override fields: FormField[] = [this.usernameField, this.passwordField, this.passwordConfirmField]
  override title: string = "Sign up";
  override description: string = "";

  override onSubmit() {
    alert(this.usernameField.value+":"+this.passwordField.value+":"+this.passwordConfirmField.value)
  }}
