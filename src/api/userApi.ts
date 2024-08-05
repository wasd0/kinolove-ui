import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Response} from "../model/response";
import {UserSingleResponse} from "../model/response/userSingleResponse";
import {RegisterRequest} from "../model/auth";
import {UUID} from "node:crypto";

@Injectable()
export class UserApi {
  constructor(private readonly http: HttpClient) {}

  register(request: RegisterRequest) {
    const url = environment.serverUrl + '/api/v1/users';
    return this.http.post<Response<UUID>>(url, request);
  }

  user(username: string) {
    const url = environment.serverUrl + `/api/v1/users/${username}`;
    return this.http.get<Response<UserSingleResponse>>(url);
  }
}
