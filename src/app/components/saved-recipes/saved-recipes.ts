import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-saved-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-recipes.html',
  styleUrl: './saved-recipes.css'
})
export class SavedRecipes {
  constructor(public s: RecipeService) {}

  onClearList() {
    this.s.clearRecipes();
  }
}