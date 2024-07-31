import {InputType} from "./InputType";

type FormValidator = () => boolean

export class FormField {
  public name: string;
  public value?: string;
  public type: InputType;
  public isValid?: FormValidator;
  public placeholder?: string;
  public isRequired: boolean = false;
  public minLength: number = 0;

  constructor(name: string, type: InputType, minLength: number) {
    this.name = name;
    this.type = type;
    this.minLength = minLength;
  }
}
