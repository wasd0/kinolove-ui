import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-movie-list-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './movie-list-card.component.html',
  styleUrl: './movie-list-card.component.scss'
})
export class MovieListCardComponent {
  @Input() title: string = "";
  @Input() id: number = 0;

  constructor(private readonly router: Router) {
  }

  goToMovieCard() {
    const movieRoute = `movie/${this.id}`
    this.router.navigate([movieRoute])
  }
}
