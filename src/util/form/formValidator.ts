import {FormField} from "../../components/models/formField";

export const validateForm = (fields: FormField[]) => {
  for (let field of fields) {
    if (!field.isValid()) {
      return false
    }
  }

  return true;
}
