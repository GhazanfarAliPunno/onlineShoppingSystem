import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
      name: 'A Test recipe', discription: 'This is simple a test', imagePath: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
    },
    {
      name:'2nd Recipe',discription:'Simple Test',imagePath:'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps25157_FM153592B03_18_12b.jpg'
    },
    {
      name: 'A Test recipe', discription: 'This is simple a test', imagePath: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
    },
    {
      name:'2nd Recipe',discription:'Simple Test',imagePath:'http://www.seriouseats.com/recipes/images/2017/03/20170210-vietnamese-chicken-emily-matt-clifton-3-1500x1125.jpg'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
