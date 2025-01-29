import { Injectable } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { ICatagory } from '../../Models/icatagory';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  ProList:Iproduct[];
  CatList:ICatagory[];
  constructor() {
    this.ProList = [
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
    ];
    this.CatList = [
      { id: 1, name: "Others" },
      { id: 2, name: "Electronics" }
    ];
   }
   getAllprod(_SendCatId?: number):Iproduct[]{
    return this.ProList;
   }
   getAllCat(CID:number):ICatagory[]{
    if(CID==0){
      return this.CatList;
    }else{
    return this.CatList.filter(c=>c.id==CID);
}
    }
    getProdById(PID:number):Iproduct[]|null{
      let prod = this.ProList.filter(p=>p.id==PID);
      return prod ? prod :null;
    }
    deleteprod(PID:number){
      let prod = this.ProList.find(p=>p.id==PID);
      let index = this.ProList.indexOf(prod as Iproduct);

      this.ProList.splice(index,1);
      this.getAllprod();
    }
    Addprod(prod:Iproduct){
      this.ProList.push(prod);
      this.getAllprod();
    }
  }
