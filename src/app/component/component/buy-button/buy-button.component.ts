import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '/Users/abdallahsaber/Desktop/angalur/mydemo/src/app/component/Models/iproduct';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-buy-button',
  imports: [NgClass,FormsModule],
  templateUrl: './buy-button.component.html',
  styleUrl: './buy-button.component.css'
})
export class BuyButtonComponent {
  @Input() product!: Iproduct;
  @Output() purchase = new EventEmitter<{product: Iproduct, quantity: number}>();

  quantity: number = 1;

  onBuy() {
    if (this.quantity > 0 && this.quantity <= this.product.quantity) {
      this.purchase.emit({
        product: this.product,
        quantity: this.quantity
      });
      this.quantity = 1;
    }
  }
}
