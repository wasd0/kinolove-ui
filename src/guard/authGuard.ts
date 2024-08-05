import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {AuthService} from "../service/authService";
import {RoutePath} from "../components/models/routePath";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (typeof window === `undefined`) {
      return false
    }

    const tok = localStorage.getItem("jwt") !== null ? localStorage.getItem("jwt")! : "";
    if (this.authService.isAuthenticated(tok)) {
      return true
    } else {
      this.router.navigate([RoutePath.LOGIN])
      return false;
    }
  }

}
