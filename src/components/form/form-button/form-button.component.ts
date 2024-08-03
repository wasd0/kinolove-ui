import {Component, Input} from '@angular/core';
import {ButtonType} from '../../models/buttonType';

type Handler = () => void;

@Component({
  selector: 'form-button',
  standalone: true,
  imports: [],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.scss',
})
export class FormButtonComponent {
  @Input() type: ButtonType = ButtonType.BUTTON;
  @Input() title: string = '';
  @Input() handler?: Handler = () => {};
  @Input() disabled?: boolean = false;

  handle = () => {
    if (this.handler) {
      this.handler();
    }
  };
}
