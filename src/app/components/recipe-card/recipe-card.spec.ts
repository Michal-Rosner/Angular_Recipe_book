import { Component, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css'
})
export class RecipeCard {
  @Input() name = '';
  @Input() category = '';
  @Input() time = 0;
  @Input() difficulty = '';
}