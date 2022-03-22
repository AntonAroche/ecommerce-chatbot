import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { StoreItem, CartItem, } from '../../models'
import { CartService } from 'src/app/service';

export interface DialogData {
  item: StoreItem
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public cartItem: CartItem;
  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    private cartService: CartService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }


  ngOnInit(): void {
    this.cartItem = this.cartService.getCartItem(this.data.item)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToCart() {
    this.cartService.addToCart(this.data.item)
    this.cartItem = this.cartService.getCartItem(this.data.item)
  }

  removeFromCart() {
    this.cartService.removeFromQuantity(this.cartItem)
    this.cartItem = this.cartService.getCartItem(this.data.item)
  }
}
