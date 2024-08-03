import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginRequest, RegisterRequest} from '../../model/auth';
import {Response} from '../../model/response';
import {UUID} from 'node:crypto';
import {environment} from "../../environments/environment";

@Injectable()
export class LoginApi {
  constructor(private readonly http: HttpClient) {}

  login(request: LoginRequest) {
    const url = environment.serverUrl + '/api/v1/login';
    return this.http.post<Response<string>>(url, request);
  }

  register(request: RegisterRequest) {
    const url = environment.serverUrl + '/api/v1/users';
    return this.http.post<Response<UUID>>(url, request);
  }
}
