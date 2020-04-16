import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  allRecipes = this.afs.collection('/recipes');

  constructor(private afs: AngularFirestore) {}
  getWholeCollection() {
    return this.allRecipes.valueChanges();
  }
  createRecipe(recipe: Recipe) {
    recipe.uid = JSON.parse(localStorage.getItem('user')).uid;
    recipe.photoURL = 'https://via.placeholder.com/150';
    console.log(recipe);
    this.allRecipes.add(recipe);
  }

  getUserRecipes() {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    return this.afs
      .collection('recipes', (ref) => ref.where('uid', '==', uid))
      .valueChanges();
  }
}
