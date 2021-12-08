import { Component } from '@angular/core';
import { ITEMS } from './mockItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items = ITEMS
  showFiller = false;
  title = 'ecommerce-site';
}
