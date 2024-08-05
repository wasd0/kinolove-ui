import {JwtHelperService} from "@auth0/angular-jwt";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
  helper = new JwtHelperService();
  isExpired(token: string) {
    return this.helper.isTokenExpired(token);
  }

  isAuthenticated(token: string) {
    return token && token.length > 0 && !this.isExpired(token)
  }
}
