import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./component/home/home.component";
import { MasterOrderComponent } from "./component/master-order/master-order.component";
import { HeaderComponent } from './component/header/header.component';
import { OrderComponent } from "./component/order/order.component";
import { FooterComponent } from "./component/footer/footer.component";
import { AboutComponent } from "./component/about/about.component";
import { RouterModule } from '@angular/router';
import { OrderDetailsComponent } from "./component/order-details/order-details.component";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, HomeComponent, MasterOrderComponent, HeaderComponent, OrderComponent,FooterComponent,AboutComponent,RouterModule,OrderDetailsComponent],

templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "mydemo";
}
