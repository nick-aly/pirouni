import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: "profile",
    component: UserProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: "login", component: LoginComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
