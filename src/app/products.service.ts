import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "http://54.92.188.1:5000/product"
  constructor(private http: HttpClient) { }
  getProducts_category(category: string)
  {
    return this.http.get(this.url + '?' + 'category=' + category)
  }
  getProducts_id(id: number)
  {
    return this.http.get(this.url + '?' + 'id=' + id)
  }
  addProducts(body: any)
  {
    return this.http.post(this.url, body)
  }
}
