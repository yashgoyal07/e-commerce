import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from '../products.service'
import { CartService } from "../cart.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: Object;

  addToCart(product: any) {
    this.cookie.set("cart", JSON.stringify([]));
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productData: ProductsService,
    private cookie: CookieService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.productData.getProducts_id(productIdFromRoute).subscribe((result)=>{
      console.warn(result);
      this.product = result[0];
    })
  }
}
