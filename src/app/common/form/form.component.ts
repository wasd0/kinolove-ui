import {Component} from '@angular/core';
import {FormField} from "./FormField";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public fields: FormField[] = []
  public title: string = ""
  public description: string = ""

  public onSubmit() {
  }

  public isSubmitDisabled(): boolean {
    for (let field of this.fields) {
      if (field.isRequired && field.value === undefined || field.isValid !== undefined && !field.isValid()) {
        return true
      }
    }

    return false;
  }
}
