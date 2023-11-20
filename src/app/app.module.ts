import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PagesModule} from "./pages/pages.module";
import {ServicesModule} from "./services/services.module";
import {PipesModule} from "./pipes/pipes.module";
import {AuthConfigModule} from './auth/auth-config.module';
import {ApiConfigModule} from "./api/api-config.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthConfigModule,
    ApiConfigModule,
    AppRoutingModule,
    ServicesModule,
    PipesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
