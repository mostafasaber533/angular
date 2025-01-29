import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe, CommonModule } from '@angular/common';
import { Iproduct } from '../../../Models/iproduct';

@Component({
  selector: 'app-template-deriven-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './template-deriven-form.component.html',
  styleUrl: './template-deriven-form.component.css'
})
export class TemplateDerivenFormComponent {
  NewProd: Iproduct = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    imageUrl: '',
    catagoryId: 0
  };

  AddPrd() {
    if (this.validateForm()) {
      console.log('Valid Product:', this.NewProd);
      // Add your save logic here
    }
  }

  private validateForm(): boolean {
    return !!(
      this.NewProd.name &&
      this.NewProd.price > 0 &&
      this.NewProd.quantity >= 0 &&
      this.NewProd.description.length >= 10 &&
      this.NewProd.imageUrl.match(/^https?:\/\/.+/) &&
      this.NewProd.catagoryId > 0
    );
  }
}
