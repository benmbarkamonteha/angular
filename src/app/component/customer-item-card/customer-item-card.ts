import { Component,input } from '@angular/core';
import { CollectionItem } from '../../models/collection.item';

@Component({
  selector: 'app-customer-item-card',
  imports: [],
  templateUrl: './customer-item-card.html',
  styleUrl: './customer-item-card.css',
})
export class CustomerItemCard {
  item= input (new CollectionItem());
}
