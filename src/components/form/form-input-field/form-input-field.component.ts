import {Component, Input} from '@angular/core';
import {FormField} from "../../models/formField";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'form-input-field',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './form-input-field.component.html',
  styleUrl: './form-input-field.component.scss'
})
export class FormInputFieldComponent {
  @Input() field!: FormField
}
