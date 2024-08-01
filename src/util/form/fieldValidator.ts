import {FormField} from "../../components/models/formField";

export const validateUsernameField = (field: FormField) => {
  if (!field.isRequired) {
    return field.value === undefined || field.value.length == 0 || field.value.length >= 5
  }

  return field.value !== undefined
    && field.value.length >= field.minLength
}

export const validatePasswordField = (field: FormField) => {
  if (!field.isRequired) {
    return field.value === undefined || field.value.length == 0 || field.value.length >= 5
  }

  return field.value !== undefined &&
    field.value.length >= field.minLength


}
