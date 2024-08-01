import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {

}
