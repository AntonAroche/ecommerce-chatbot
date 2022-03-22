import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { StoreItem, CartItem, User, Order } from '../../models'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/service';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  Province: string[] = [
    'Ontario',
    'Quebec',
    'British Columbia',
    'Alberta',
    'Manitoba',
    'Saskatchewan',
    'Nova Scotia',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Prince Edward Island',
  ]
  form: FormGroup;
  submitted = false;
  public user: User;
  public totalItem: number = 0;
  public products: CartItem[] = [];
  public grandTotal !: number;
  constructor(
    private cartService: CartService,
    private accountService: AccountService,
    private formBuilder: FormBuilder) {
    this.accountService.user.subscribe({
      next: (u: User) => this.user = u,
    })
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.totalItem = res.length;
        this.grandTotal = this.cartService.getTotalPrice();
      })

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      address: ['', Validators.required],
      country: ['', Validators.required],
      province: ['', Validators.required],
      postal: ['', Validators.required],
      ccName: ['', Validators.required],
      ccNum: ['', Validators.required],
      exp: ['', Validators.required],
      cvv: ['', [Validators.maxLength(3), Validators.minLength(3)]],
      cardType: ['', Validators.required],
    });

    this.form.controls.cardType.setValue('Credit ca333rd');
  }

  get f() {
    return this.form.controls;
  }

  changeCountry(e: any) {
    this.f.country.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeProvince(e: any) {
    this.f.province.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.form.controls)
    if (this.form.invalid) {
      console.log("invalid")
      return;
    }

    const order: Order = {
      items: this.products,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      address: this.f.address.value,
      country: this.f.country.value,
      province: this.f.province.value,
      postal: this.f.postal.value,
      ccNum: this.f.ccNum.value,
      cardType: this.f.cardType.value,
    }
    alert("succ")
    console.log(order)
  }

  addToQuantity(item: CartItem) {
    this.cartService.addToQuantity(item)
  }
  removeFromQuantity(item: CartItem) {
    this.cartService.removeFromQuantity(item)
  }
  removeItem(item: CartItem) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
}
