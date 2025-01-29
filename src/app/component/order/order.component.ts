import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  OnInit,
} from "@angular/core";
import { Iproduct } from "../Models/iproduct";
/* import { ICatagory } from "../Models/icatagory";
 */
import { CommonModule, CurrencyPipe, NgClass, NgStyle } from "@angular/common";
import { LightBoxDirective } from "../Directives/light-box.directive";
import { HomeComponent } from "../home/home.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { BuyButtonComponent } from "../component/buy-button/buy-button.component";
import { StaticDataService } from "../component/Services/static-data.service";

@Component({
  selector: "app-order",
  standalone: true,
  imports: [
    NgClass,
    CurrencyPipe,
    FormsModule,
    RouterModule,
    BuyButtonComponent,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LightBoxDirective,
  ],
  templateUrl: "./order.component.html",
  styleUrl: "./order.component.css",
})
export class OrderComponent implements OnChanges, OnInit {
  [x: string]: any;
  /*   ProList: Iproduct[];
   */ FilteredList: Iproduct[] = [];
  @Input() SendCatId: number = 0;

  /*   CatList: ICatagory[];
   */ Total: number;
  @Output() SendedTotal: EventEmitter<number> = new EventEmitter<number>();
  SelectedCatId: number;
  constructor(private router: Router, private StaticData: StaticDataService) {
    this.FilteredList = [];
    this.SelectedCatId = 0;
    this.Total = 0;

    /* this.CatList = [
      { id: 1, name: "Others" },
      { id: 2, name: "Electronics" }

    ]; */

    /* this.ProList = [
      {
        id: 1,
        name: "Charger SXT RWD",
        price: 32999.99,
        quantity: 3,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
        description: "Powerful and stylish sedan",
        catagoryId: 1,
      },
      {
        id: 2,
        name: "Apple MacBook Pro 14 Inch Space Grey",
        price: 1999.99,
        quantity: 8,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
        description: "Professional grade laptop",
        catagoryId: 1,
      },
      {
        id: 3,
        name: "Green Oval Earring",
        price: 24.99,
        quantity: 5,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
        description: "Elegant earring",
        catagoryId: 2,
      },
      {
        id: 4,
        name: "Apple Airpods",
        price: 129.99,
        quantity: 5,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
        description: "Wireless earbuds",
        catagoryId: 2,
      },
      {
        id: 5,
        name: "Cricket Helmet",
        price: 44.99,
        quantity: 4,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
        description: "Sports protection gear",
        catagoryId: 1,
      },
      {
        id: 6,
        name: "iPhone X",
        price: 899.99,
        quantity: 7,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
        description: "Premium smartphone",
        catagoryId: 2,
      },
      {
        id: 7,
        name: "Golf Ball",
        price: 9.99,
        quantity: 0,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/thumbnail.png",
        description: "Professional golf ball",
        catagoryId: 1,
      },
      {
        id: 8,
        name: "iPhone 6",
        price: 299.99,
        quantity: 3,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png",
        description: "Classic smartphone",
        catagoryId: 2,
      },
      {
        id: 9,
        name: "Selfie Lamp with iPhone",
        price: 14.99,
        quantity: 2,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png",
        description: "Photography accessory",
        catagoryId: 1,
      },
      {
        id: 10,
        name: "Rolex Submariner Watch",
        price: 13999.99,
        quantity: 1,
        imageUrl:
          "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
        description: "Luxury timepiece",
        catagoryId: 1,
      },
    ]; */
    /*     this.FilteredList = this.ProList;
     */
  }
  ngOnInit(): void {
    this.FilteredList = this.StaticData.getAllprod();
  }

  handlePurchase(event: { product: Iproduct; quantity: number }) {
    const { product, quantity } = event;
    this.Total += product.price * quantity;
    product.quantity -= quantity;
    this.SendedTotal.emit(this.Total);
  }

  FiltertedByCatID() {
    const allProducts = this.StaticData.getAllprod();
    if (this.SendCatId === 0) {
      this.FilteredList = allProducts;
    } else {
      this.FilteredList = allProducts.filter(
        (product) => product.catagoryId === this.SendCatId
      );
    }
  }

  ngOnChanges(): void {
    this.FiltertedByCatID();
  }
}
