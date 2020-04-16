import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { RecipeService } from '../core/recipe.service';
import { Recipe } from '../recipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes$: any;
  constructor(private service: RecipeService) {}

  ngOnInit(): void {
    this.recipes$ = this.service.getWholeCollection();
  }
}
