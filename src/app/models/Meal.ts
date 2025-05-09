import {Days} from './Days';
import {IngredientItem} from './IngredientItem';

export interface Meal{

  id?: Number;

  mealName?: String;

  mealDay?: Days | null;

  recipeUrl?: String;

  pictureUrl: URL | null;

  directions?: String;

  ingredientItems?: IngredientItem[];
}
