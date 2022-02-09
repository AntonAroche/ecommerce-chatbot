import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { StoreItem } from '../../storeItem'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() item: StoreItem
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addtocart() {
    this.cartService.addToCart(this.item)
  }

}
