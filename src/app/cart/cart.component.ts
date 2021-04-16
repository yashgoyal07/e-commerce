import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  totalPrice: number;
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  clearCart() {
    this.cartService.clearCart();
    window.alert("Cart has been emptied!");
    location.reload();
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    this.totalPrice = 0;
    window.alert("Thanks for purchasing!")
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.totalPrice = this.cartService.getTotal();
  }
}
