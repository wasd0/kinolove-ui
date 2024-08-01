import {Component} from '@angular/core';
import {FormField} from "../../models/formField";
import {InputType} from "../../models/inputType";
import {validatePasswordField, validateUsernameField} from "../../../util/form/fieldValidator";
import {FormComponent} from "../form.component";
import {FormInputFieldComponent} from "../form-input-field/form-input-field.component";
import {validateForm} from "../../../util/form/formValidator";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormComponent,
    FormInputFieldComponent,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  usernameField: FormField = {
    type: InputType.TEXT,
    name: 'username',
    placeholder: 'Enter your username',
    isRequired: true,
    minLength: 5,
    isValid: () => validateUsernameField(this.usernameField),
  }

  passwordField: FormField = {
    type: InputType.PASSWORD,
    name: 'password',
    placeholder: 'Enter your password',
    isRequired: true,
    minLength: 8,
    isValid: () => validatePasswordField(this.passwordField),
  }

  isConfirmValid = () => {
    return this.passwordConfirmField.value === this.passwordField.value
  }

  passwordConfirmField: FormField = {
    type: InputType.PASSWORD,
    name: 'passwordConfirm',
    placeholder: 'Confirm password',
    isRequired: true,
    minLength: 0,
    isValid: this.isConfirmValid,
  }

  signUp = () => {
    alert("sign up")
  }

  validateForm = () => {
    return validateForm([this.usernameField, this.passwordField, this.passwordConfirmField])
  }
}
