import {FormField} from "../../components/form/formField";

export const validateForm = (fields: FormField[]) => {
  for (let field of fields) {
    if (!field.isValid()) {
      return false
    }
  }

  return true;
}
