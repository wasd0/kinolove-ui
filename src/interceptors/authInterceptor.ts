import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {getErrResponse} from "../util/errUtils";
import {Router} from "@angular/router";
import {RoutePath} from "../components/models/routePath";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private readonly router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({withCredentials: true})

    return next.handle(authReq).pipe(tap({
      error: err => {
        const status = getErrResponse(err).code
        if (status === 401) {
          this.router.navigate([RoutePath.LOGIN]).then(r => {
            if (!r) {
              console.log(err)
            }
          })
        }
      }
    }))
  }
}
