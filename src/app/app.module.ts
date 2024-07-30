import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login/login.component";

@NgModule(
  {
    declarations: [],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppComponent,
      LoginComponent
    ],
    providers: [],
    bootstrap: []
  })


export class AppModule {
}
