import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StaticDataService } from "../Services/static-data.service";
import { Iproduct } from "../Models/iproduct";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class OrderDetailsComponent implements OnInit {
  id: number = 0;
  prod: Iproduct | null = null;
  isEditing: boolean = false;
  newProduct: Iproduct = {
    id: 0,
    name: "",
    price: 0,
    quantity: 0,
    imageUrl: "",
    description: "",
    catagoryId: 0,
  };

  constructor(
    private activerouter: ActivatedRoute,
    private staticData: StaticDataService,
    private router: Router
  ) {
    this.id = Number(this.activerouter.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.staticData.getOrderById(this.id).subscribe({
      next: (product) => {
        this.prod = product;
        console.log("Loaded product:", product); 
      },
      error: (error) => {
        console.error("Error loading product:", error);
      },
    });
  }

  saveProduct() {
    if (this.prod) {
      this.staticData.updateProduct(this.prod).subscribe(() => {
        this.isEditing = false;
        this.loadProduct();
      });
    }
  }

  deleteProduct() {
    if (this.prod) {
      this.staticData.deleteProduct(this.prod.id).subscribe(() => {
        this.router.navigate(["/products"]);
      });
    }
  }

  addNewProduct() {
    this.staticData.addProduct(this.newProduct).subscribe(() => {
      this.loadProduct();
      this.newProduct = {} as Iproduct;
    });
  }
}
