import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedItemRecipe = new EventEmitter<Recipe>();
  @Output() recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test Recipe 1', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test Recipe 2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test Recipe 3', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedItemRecipe.emit(recipe);
  }

}
