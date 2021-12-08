import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from '../storeItem';

@Component({
  selector: 'app-storeitem',
  templateUrl: './storeitem.component.html',
  styleUrls: ['./storeitem.component.css']
})
export class StoreitemComponent implements OnInit {
  @Input() item: StoreItem;
  constructor() { }

  ngOnInit(): void {
  }

}
