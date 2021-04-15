import { Component, OnInit } from '@angular/core';
import { products, addProduct } from '../products'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  addProductForm = this.formBuilder.group({
    id: '',
    name: '',
    price: '',
    description: ''
  });
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.addProductForm.value.id = products.length + 1;
    addProduct(this.addProductForm.value);
    console.warn('Product successfully added.', this.addProductForm.value);
    this.addProductForm.reset();
  }
}
