import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FormButtonComponent} from "./form-button/form-button.component";
import {ButtonType} from "../models/buttonType";

type SubmitHandler = () => void
type FormValidator = () => boolean

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage,
    FormButtonComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  protected readonly ButtonType = ButtonType;

  @Input() submitHandler: SubmitHandler = () => {}
  @Input() isFormValid: FormValidator = () => true
}
