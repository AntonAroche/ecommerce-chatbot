import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { StoreItem } from '../../models'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() item: StoreItem
  ngOnInit(): void {
  }
}
