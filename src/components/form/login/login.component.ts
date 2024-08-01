import {Component} from '@angular/core';
import {FormField} from "../../models/formField";
import {InputType} from "../../models/inputType";
import {validatePasswordField, validateUsernameField} from "../../../util/form/fieldValidator";
import {FormComponent} from "../form.component";
import {validateForm} from "../../../util/form/formValidator";
import {FormInputFieldComponent} from "../form-input-field/form-input-field.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormComponent,
    FormInputFieldComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   usernameField: FormField = {
    type: InputType.TEXT,
    name: 'username',
    placeholder: 'Enter your username',
    isRequired: true,
    minLength: 5,
    isValid: () => validateUsernameField(this.usernameField)
  }



  passwordField: FormField = {
    type: InputType.PASSWORD,
    name: 'password',
    placeholder: 'Enter your password',
    isRequired: true,
    minLength: 8,
    isValid: () => validatePasswordField(this.passwordField)
  }

  login = () => {
    alert("login")
  }

  validateForm = () => {
    return validateForm([this.usernameField, this.passwordField])
  }
}
