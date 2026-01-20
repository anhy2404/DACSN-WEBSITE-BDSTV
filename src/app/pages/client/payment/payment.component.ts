import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { ICart } from '../../../interfaces/Cart';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { Router, RouterModule } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, CartComponent, RouterModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  providers: [CartService]
})
export class PaymentComponent {
  constructor(private cartService: CartService, private router: Router) { }
  items: ICart[] = [];
  ngOnInit(): void {
    this.loadCartItems();
  }
  loadCartItems(): void {
    this.cartService.getItems().subscribe((itemCart) => {
      this.items = itemCart;
    });
  }
  formatCurrency(amount: number): string {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const formattedAmount = formatter.format(amount);
    return formattedAmount.replace('.00', '');
  }
  getTotalCost(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
  clearCart(): void {
    if (confirm('Bạn có muốn thanh toán không!')) {
      this.cartService.clearCart().subscribe(() => {
        this.items = [];
        alert('Thanh toán thành công!');
        this.router.navigate(['/']);
      });
    }
  }
}
