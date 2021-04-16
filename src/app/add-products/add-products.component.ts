import { Component, OnInit } from '@angular/core';
import { products, addProduct } from '../products'
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  addProductForm = this.formBuilder.group({
    name: "",
    description: "",
    price: "",
    category: "",
    ratings: "",
    units:"",
    reviews: "",
    img_path: ""
    });
  constructor(private formBuilder: FormBuilder, private productData:ProductsService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.productData.addProducts(this.addProductForm.value).subscribe((result)=>{
      window.alert('Product added successfully');
      console.warn('Product successfully added.', this.addProductForm.value);
      this.addProductForm.reset();
    })
  }
}
