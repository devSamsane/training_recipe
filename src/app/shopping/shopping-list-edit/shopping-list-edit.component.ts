import { Ingredient } from '../../shared/models/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('count') countRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameRef.nativeElement.value,
      this.countRef.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient);
  }

}
