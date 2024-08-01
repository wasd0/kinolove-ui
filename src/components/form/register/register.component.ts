import {Component} from '@angular/core';
import {FormField} from "../../models/formField";
import {InputType} from "../../models/inputType";
import {validatePasswordField, validateUsernameField} from "../../../util/form/fieldValidator";
import {FormComponent} from "../form.component";
import {FormInputFieldComponent} from "../form-input-field/form-input-field.component";
import {validateForm} from "../../../util/form/formValidator";
import {NgIf} from "@angular/common";
import {FormButtonComponent} from "../form-button/form-button.component";
import {ButtonType} from "../../models/buttonType";
import {Title} from "@angular/platform-browser";
import {RoutePath} from "../../models/routePath";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormComponent,
    FormInputFieldComponent,
    NgIf,
    FormButtonComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
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
  protected readonly ButtonType = ButtonType;
  protected readonly Title = Title;

  goToLogin = () => {
    this.router.navigate([RoutePath.LOGIN]).then(r => {
      if (!r) {
        alert("Error")
      }
    })
  };
}
