import { Component } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { FormsModule } from '@angular/forms';
import { ICatagory } from '../Models/icatagory';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-master-order',
  standalone: true,
  imports: [OrderComponent, FormsModule,CurrencyPipe],
  templateUrl: './master-order.component.html',
  styleUrl: './master-order.component.css'
})

export class MasterOrderComponent {
  SelectedCatId: number;
  CatList: ICatagory[];
price: number;
  constructor() {
    this.price = 0;
    this.SelectedCatId = 0;
    this.CatList = [
      { id: 1, name: "Others" },
      { id: 2, name: "Electronics" }
    ];
  }

  onCategoryChange() {
    this.SelectedCatId = Number(this.SelectedCatId);
  }
  DisPlayPrice(data: any){
    this.price = data
  }
}
