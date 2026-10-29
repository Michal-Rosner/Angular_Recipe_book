import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
    recipes=[
        { id: 1, name: 'פוקאצ׳ה', category: 'מאפים', time: 60, difficulty: 'קל' },
    { id: 2, name: 'סלט קינואה', category: 'סלטים', time: 15, difficulty: 'קל' },
    { id: 3, name: 'תפוחי אדמה מוקרמים', category: 'תוספות', time: 45, difficulty: 'בינוני' },
    { id: 4, name: 'עוגת שוקולד', category: 'קינוחים', time: 50, difficulty: 'קל' },
    { id: 5, name: 'מרק כתום', category: 'מרקים', time: 40, difficulty: 'קל' }
  ];
    getAllRecipe(){
        return this.recipes
    }

    private savedRecipesSignal = signal<any[]>([]);
  savedRecipes = this.savedRecipesSignal.asReadonly();

   addSavedRecipe(recipe: any) {
    this.savedRecipesSignal.update((recipes: any[]) => [...recipes, recipe]);
  }

  clearRecipes() {
    this.savedRecipesSignal.set([]);
  }
}