import { Component, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css'
})
export class RecipeCard {
  
  constructor(public s: RecipeService) {}

  @Input() name = '';
  @Input() category = '';
  @Input() time = 0;
  @Input() difficulty = '';

  onSaveRecipe() {
    this.s.addSavedRecipe({
      name: this.name,
      category: this.category,
      time: this.time,
      difficulty: this.difficulty
    });
  }
}