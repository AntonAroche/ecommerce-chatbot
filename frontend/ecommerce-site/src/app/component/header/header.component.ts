
import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { CartService, AccountService } from 'src/app/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  public totalItem: number = 0;
  public searchTerm !: string;
  constructor(private cartService: CartService, private accountService: AccountService) {
    this.accountService.user.subscribe({
      next: (u: User) => this.user = u,
    })
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

}
