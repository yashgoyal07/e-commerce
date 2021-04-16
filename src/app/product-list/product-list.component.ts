import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Object;
  
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor(private productData:ProductsService) {
  }
  ngOnInit(): void {
    this.productData.getProducts_category("mobile").subscribe((result)=>{
      console.warn(result);
      this.products = result;
    })
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/