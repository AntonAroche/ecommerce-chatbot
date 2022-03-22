import { Component, OnInit, Inject } from '@angular/core';
import { ITEMS, StoreItem } from '../../models'
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

export interface DialogData {
  item: StoreItem
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items = ITEMS
  showFiller = false;
  constructor(public dialog: MatDialog) { }

  openDialog(item: StoreItem): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '400px',
      data: { item },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() { }
}
