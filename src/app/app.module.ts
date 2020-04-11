import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NavbarModule } from "./navbar/navbar.module";

import { UserProfileModule } from "./user-profile/user-profile.module";
import { HomeModule } from "./home/home.module";
import { LoginModule } from "./login/login.module";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {
  AngularFireAnalyticsModule,
  UserTrackingService,
  ScreenTrackingService,
  DEBUG_MODE,
} from "@angular/fire/analytics";

import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    UserProfileModule,
    HomeModule,
    LoginModule,
  ],
  providers: [
    UserTrackingService,
    ScreenTrackingService,
    { provide: DEBUG_MODE, useValue: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
