import { Component, OnInit } from '@angular/core';
import { StoreItem } from '../storeitem';

@Component({
  selector: 'app-storeitem',
  templateUrl: './storeitem.component.html',
  styleUrls: ['./storeitem.component.css']
})
export class StoreitemComponent implements OnInit {
  storeitem: StoreItem = {
    id: 1,
    name: 'Apple',
    price: 1,
    src: "https://media.istockphoto.com/photos/red-apple-picture-id495878092?b=1&k=20&m=495878092&s=170667a&w=0&h=bJgILGFxOka0ymPlgilH8qaRxFhKole_M6IiYs6RyGM="
  }
  constructor() { }

  ngOnInit(): void {
  }

}
