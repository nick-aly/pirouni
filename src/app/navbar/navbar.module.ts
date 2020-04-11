import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavbarComponent } from "./navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar/";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  exports: [NavbarComponent]
})
export class NavbarModule {}
