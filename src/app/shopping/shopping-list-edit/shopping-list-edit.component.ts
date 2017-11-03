import { Ingredient } from '../../shared/models/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('count') countRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameRef.nativeElement.value,
      this.countRef.nativeElement.value
    );

    this.shoppingListService.addIngredient(newIngredient);
  }

}
