import {InputType} from "./inputType";

type FormValidator = () => boolean

export class FormField {
  public name: string = "";
  public value?: string;
  public type: InputType = InputType.TEXT;
  public isValid: FormValidator = () => true;
  public placeholder?: string;
  public isRequired: boolean = false;
  public minLength: number = 0;
}
