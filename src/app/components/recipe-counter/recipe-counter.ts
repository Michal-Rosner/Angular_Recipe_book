import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-recipe-counter',
  standalone: true,
  templateUrl: './recipe-counter.html',
  styleUrl: './recipe-counter.css'
})
export class RecipeCounter {
  constructor(public s: RecipeService) {}
}