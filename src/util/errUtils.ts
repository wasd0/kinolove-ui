import {HttpErrorResponse} from "@angular/common/http";
import {ErrorResponse} from "../model/response/errorResponse";

export const getErrResponse = (err: HttpErrorResponse) => {
  return err.error as ErrorResponse
}
