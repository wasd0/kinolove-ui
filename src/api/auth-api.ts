import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginRequest} from '../model/auth';
import {Response} from '../model/response';
import {environment} from "../environments/environment";

@Injectable()
export class AuthApi {
  constructor(private readonly http: HttpClient) {}

  login(request: LoginRequest) {
    const url = environment.serverUrl + '/api/v1/login';
    return this.http.post<Response<string>>(url, request);
  }

  logout() {
    const url = environment.serverUrl + '/api/v1/logout';
    return this.http.post(url, null);
  }
}
