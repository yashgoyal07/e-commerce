import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";


@Injectable()
export class CartService {
  items = [];
  total: number;

  addToCart(product) {
    this.items.push(product);
    this.cookie.set("cart", JSON.stringify(this.items));
  }

  getItems() {
    this.items = JSON.parse(this.cookie.get('cart'));
    return this.items;
  }

  getTotal() {
    this.total = 0;
    this.items = JSON.parse(this.cookie.get('cart'));
    for(let j=0;j<this.items.length;j++){ 
      this.total+= this.items[j].price  
    }
    return this.total 
  }

  clearCart() {
    this.items = [];
    this.cookie.set("cart", JSON.stringify(this.items));
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient,
    private cookie: CookieService  ) {}
}
