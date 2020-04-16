import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { RecipeService } from '../core/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private service: RecipeService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  createRecipe() {
    console.log(this.recipeForm.value);
    this.service.createRecipe(this.recipeForm.value);
  }
}
