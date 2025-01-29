import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MasterOrderComponent } from './component/master-order/master-order.component';
import { AboutComponent } from './component/about/about.component';
import { Component } from '@angular/core';
import { ErrorComponent } from './component/error/error.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { TemplateDerivenFormComponent } from './component/component/forms/template-deriven-form/template-deriven-form.component';
import { ReactiveFormsComponent } from './component/component/reactive-forms/reactive-forms.component';


export const routes: Routes = [
  {path:'',  redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:MasterOrderComponent},
  {path:'products/:id',component:OrderDetailsComponent},
  {path:'order-details',component:OrderDetailsComponent},
  {path:'template',component:TemplateDerivenFormComponent},
  {path:'reactive',component:ReactiveFormsComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:ErrorComponent}
];
