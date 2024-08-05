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
import {AuthApi} from "../../../api/auth-api";
import {getErrResponse} from "../../../util/errUtils";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormComponent,
    FormInputFieldComponent,
    FormButtonComponent,
    NgIf
  ],
  providers: [AuthApi],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private readonly router: Router, private readonly authApi: AuthApi) {
  }

  hasError: boolean = false;
  errMsg: string = "";

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
    this.authApi.login({
      username: this.usernameField.value!,
      password: this.passwordField.value!
    }).subscribe({
      error: err => {
        this.hasError = true
        this.errMsg = getErrResponse(err).message !== undefined ? getErrResponse(err)?.message! : ""
      }, next: response => {
        localStorage.setItem("jwt", response.data)
        localStorage.setItem("user", this.usernameField.value!)
        this.router.navigate([RoutePath.MOVIE_LIST]).then(r => {
          if (!r) {
            alert('Error')
          }
        })
      }
    })
  }

  validateForm = () => {
    return validateForm([this.usernameField, this.passwordField])
  }
  protected readonly ButtonType = ButtonType;

  goToSignUp = () => {
    this.router.navigate([RoutePath.REGISTER]).then(r => {
      if (!r) {
      }
    })
  };
}
