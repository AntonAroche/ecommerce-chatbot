import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from '../../storeItem'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() item: StoreItem
  constructor() { }

  ngOnInit(): void {
  }

}
