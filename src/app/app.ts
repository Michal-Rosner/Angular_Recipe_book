import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// ייבוא הקבצים שיצרנו
import { RecipeService } from './services/recipe';
import { RecipeCounter } from './components/recipe-counter/recipe-counter';
import { RecipeCard } from './components/recipe-card/recipe-card';
import { SavedRecipes } from './components/saved-recipes/saved-recipes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RecipeCounter, RecipeCard, SavedRecipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('recipe-book');
  
  constructor(public s: RecipeService) {}
}