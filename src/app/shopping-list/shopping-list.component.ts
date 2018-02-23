import { Component} from '@angular/core';
import { ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent   {

  ingredientsArr:ingredients[]=[
{nameIngredient:'Apple',amountIngredient:5},
{nameIngredient:'Orange',amountIngredient:10}


  ];

}
