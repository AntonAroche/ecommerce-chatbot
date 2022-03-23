import { Component, OnInit, Inject } from '@angular/core';
import { StoreItem } from '../../models'
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { ProductService } from 'src/app/service/product.service';

export interface DialogData {
  item: StoreItem
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: StoreItem[] = []
  showFiller = false;
  constructor(public dialog: MatDialog, private productService: ProductService) { }

  openDialog(item: StoreItem): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '400px',
      data: { item },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(res => {
        this.items = res
      })
  }
}
