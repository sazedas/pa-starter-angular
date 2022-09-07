import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-starter-angular';
  ShowForm = false;
  ShowButton = true;
  ShowNoRecipes = true;
  recipeName : string = 'Tofu Scramble Tacos';
  recipeInstruction : string = '1. Heat skillet';
  recipeInstructions: string[] = [];

  showForm() {
    this.ShowForm = !this.ShowForm;
    this.ShowButton = !this.ShowButton;
  }

  addRecipeName(){
    this.recipeInstructions.push(this.recipeName);
      //Reset input
      this.recipeName = '';
      this.ShowNoRecipes = false;
  }
}
