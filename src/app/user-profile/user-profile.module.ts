import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, FormsModule]
})
export class UserProfileModule {}
