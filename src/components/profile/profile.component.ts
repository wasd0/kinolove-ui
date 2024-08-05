import {Component, OnInit} from '@angular/core';
import {UserApi} from "../../api/userApi";
import {UserSingleResponse} from "../../model/response/userSingleResponse";
import {FormButtonComponent} from "../form/form-button/form-button.component";
import {ButtonType} from "../models/buttonType";
import {AuthApi} from "../../api/auth-api";
import {ActivatedRoute, Router} from "@angular/router";
import {RoutePath} from "../models/routePath";

@Component({
  selector: 'app-profile',
  standalone: true,
  providers: [UserApi, AuthApi],
  imports: [
    FormButtonComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  usr?: UserSingleResponse

  constructor(private readonly userApi: UserApi, private readonly authApi: AuthApi,
              private readonly activeRoute: ActivatedRoute, private readonly router: Router) {
  }

  ngOnInit(): void {
    const username = this.activeRoute.snapshot.params['id']
    this.goToProfile(username)
  }

  goToProfile(username: string) {
    this.userApi.user(username).subscribe({
      next: (res) => {
        if (res) {
          this.usr = res.data
        }
      }, error: err => {
        this.router.navigate([RoutePath.LOGIN])
      }
    })

  }

  logout = () => {
    this.authApi.logout().subscribe({
      next: (res) => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
        this.router.navigate([RoutePath.LOGIN])
      }
    })
  }

  protected readonly ButtonType = ButtonType;
}
