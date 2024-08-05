import {Component, OnInit} from '@angular/core';
import {MovieApi} from "../../api/movieApi";
import {NgForOf} from "@angular/common";
import {MovieItemData} from "../../model/movie/movieItemData";
import {MovieListCardComponent} from "./components/movie-list-card/movie-list-card.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  providers: [MovieApi],
  imports: [
    NgForOf,
    MovieListCardComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  movies: MovieItemData[] = []

  constructor(private readonly movieApi: MovieApi) {
  }

  ngOnInit(): void {
    this.movieApi.findAllMovies().subscribe({
      next: response => {
        this.movies = response?.data.movies;
      }
    })
  }
}
