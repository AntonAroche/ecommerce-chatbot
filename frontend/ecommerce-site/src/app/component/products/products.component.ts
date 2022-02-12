import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../models'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items = ITEMS
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
