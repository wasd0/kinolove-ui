import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {MovieListData} from "../model/movie";
import {Response} from "../model/response"

@Injectable()
export class MovieApi {
  constructor(private readonly http: HttpClient) {}

  findAllMovies() {
    const url = environment.serverUrl + '/api/v1/movies';
    return this.http.get<Response<MovieListData>>(url)
  }
}
