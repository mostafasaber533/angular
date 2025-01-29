import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Iproduct } from "../Models/iproduct";

@Injectable({
  providedIn: "root",
})
export class StaticDataService {
  private products: Iproduct[] = [
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
      name: "Apple MacBook Pro",
      price: 1999.99,
      quantity: 8,
      imageUrl:
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
      description: "Professional grade laptop",
      catagoryId: 2,
    },
  ];

  getAllprod(): Iproduct[] {
    return this.products;
  }

  getOrderById(id: number): Observable<Iproduct | null> {
    const product = this.products.find((prod) => prod.id === id);
    return of(product || null);
  }

  addProduct(product: Iproduct): Observable<Iproduct> {
    this.products.push(product);
    return of(product);
  }

  updateProduct(product: Iproduct): Observable<Iproduct | null> {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      return of(product);
    }
    return of(null);
  }

  deleteProduct(id: number): Observable<boolean> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  getAllProducts(): Observable<Iproduct[]> {
    return of(this.products);
  }

  // Other service methods...
}
