import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: {};
  category = {
    category: "all"
  }
  categoryForm = this.formBuilder.group({
    category: ""
  });
  
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor(private productData:ProductsService,
              private formBuilder: FormBuilder) {
  }

  onSubmit(): void { 
    this.category = this.categoryForm.value;
    console.log(this.category.category);
    this.ngOnInit();
  }
  
  ngOnInit(): void {
    this.productData.getProducts_category(this.category.category).subscribe((result)=>{
      this.products = result;
    })
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/