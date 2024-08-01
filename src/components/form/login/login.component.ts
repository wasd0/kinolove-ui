import {Component} from '@angular/core';
import {FormField} from "../../models/formField";
import {InputType} from "../../models/inputType";
import {validatePasswordField, validateUsernameField} from "../../../util/form/fieldValidator";
import {FormComponent} from "../form.component";
import {validateForm} from "../../../util/form/formValidator";
import {FormInputFieldComponent} from "../form-input-field/form-input-field.component";
import {ButtonType} from "../../models/buttonType";
import {FormButtonComponent} from "../form-button/form-button.component";
import {Router} from "@angular/router";
import {RoutePath} from "../../models/routePath";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormComponent,
    FormInputFieldComponent,
    FormButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router: Router;

  constructor(router: Router) {
    this.router = router
  }

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
  protected readonly ButtonType = ButtonType;

  goToSignUp = () => {
    this.router.navigate([RoutePath.REGISTER]).then(r => {
      if (!r) {
        alert("Error")
      }
    })
  };
}
