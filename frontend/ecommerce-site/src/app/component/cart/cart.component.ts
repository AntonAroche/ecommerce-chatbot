import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { StoreItem } from '../../storeItem'
import { CartItem } from '../../cartItem'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: CartItem[] = [];
  public grandTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  addToQuantity(item: CartItem) {
    this.cartService.addToQuantity(item)
  }
  removeFromQuantity(item: CartItem) {
    this.cartService.removeFromQuantity(item)
  }
  removeItem(item: CartItem) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

}