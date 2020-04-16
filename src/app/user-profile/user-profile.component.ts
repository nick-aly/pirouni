import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RecipeService } from '../core/recipe.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: User;
  userRecipes$: any;
  constructor(private service: RecipeService) {
    this.userRecipes$ = this.service.getUserRecipes();
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
