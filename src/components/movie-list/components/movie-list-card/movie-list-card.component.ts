import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie-list-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-list-card.component.html',
  styleUrl: './movie-list-card.component.scss'
})
export class MovieListCardComponent {
  @Input() title: string = "";
  @Input() id: number = 0;
}
