import {Ingredient} from './Ingredient';
import {Measurements} from './Measurements';

export interface IngredientItem{

  id: Number;

  amount: Number;

  measurement: Measurements;

  ingredient: Ingredient;
}
