import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MovieSingleResponse} from "../../model/response/movieSingleResponse";
import {MovieApi} from "../../api/movieApi";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  providers: [MovieApi],
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit {

  movie?: MovieSingleResponse

  constructor(private readonly movieApi: MovieApi, private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe(() => {
      const id = this.route.snapshot.params['id']
      this.getMovie(id)
    });
  }

  getMovie(id: number) {
    this.movieApi.findById(id).subscribe({
      next: (res) => {
        if (res) {
          this.movie = res.data
        }
      }, error: err => {
        alert(err.message)
      }
    })
  }


  getImageUrl = () => {
    return this.movie?.imageUrl == null || this.movie?.imageUrl === '' ? "https://via.placeholder.com/240x320"
      : this.movie?.imageUrl
  }
}
