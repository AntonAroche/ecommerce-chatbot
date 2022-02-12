import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoreItem, CartItem } from '../models'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: CartItem[] = []
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: StoreItem) {
    let added = false
    this.cartItemList.forEach((i: CartItem) => {
      if (i.item.id == product.id) {
        i.quantity += 1
        i.subtotal += product.price
        added = true;
      }
    })

    if (!added) {
      this.cartItemList.push({
        item: product,
        quantity: 1,
        subtotal: product.price
      })
    }

    this.productList.next(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.forEach((i: CartItem) => {
      grandTotal += i.subtotal;
    })
    return grandTotal;
  }

  removeCartItem(product: CartItem) {
    this.cartItemList.forEach((i: CartItem, index: any) => {
      if (product.item.id === i.item.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  addToQuantity(product: CartItem) {
    this.cartItemList.forEach((i: CartItem, index: any) => {
      if (product.item.id === i.item.id) {
        i.quantity += 1
        i.subtotal += i.item.price
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeFromQuantity(product: CartItem) {
    this.cartItemList.forEach((i: CartItem, index: any) => {
      if (product.item.id === i.item.id) {
        if (i.quantity === 1) {
          this.cartItemList.splice(index, 1);
        } else {
          i.quantity -= 1
          i.subtotal -= i.item.price
        }
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}