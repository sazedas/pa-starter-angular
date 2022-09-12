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
  ShowSubmitButton = false;
  ShowNoRecipes = true;
  recipeName = "";
  recipeInstructions = "";
  recipeInstructionAll: string[] = [];

  ngOnInIt(): void{
    this.showForm();
  }

  showForm() {
    this.ShowForm = !this.ShowForm;
    this.ShowButton = !this.ShowButton;
    this.ShowSubmitButton = !this.ShowSubmitButton;
  }

  addRecipeName(){
    this.recipeInstructionAll.push(this.recipeName);
      //Reset input
      this.recipeName = '';
      this.ShowNoRecipes = false;
  }
}
