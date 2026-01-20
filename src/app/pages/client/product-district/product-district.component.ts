import { BannerComponent } from './../../../components/layouts/banner/banner.component';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../../../service/cart.service';
import { ProductService } from '../../../service/product.service';
import { CookieService } from 'ngx-cookie-service';
import { CategoryService } from '../../../service/categorie.service';
import { IProduct } from '../../../interfaces/Product';
import { ICart } from '../../../interfaces/Cart';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../component/rating/rating.component';
import { DropdownData } from '../../../utils/dacsan-huyenxa-item';

@Component({
  selector: 'app-product-district',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerComponent, RatingComponent],
  templateUrl: './product-district.component.html',
  styleUrl: './product-district.component.css'
})
export class ProductDistrictComponent {
  filterData: any;
  DropdownData: any = DropdownData
  isCartUpdated: boolean = false;
  userInfo: any = {} as any;
  carts: ICart[] = [];
  cart: any = {} as any;
  products: IProduct[] | undefined;
  filterProducts: IProduct[] | undefined;;
  constructor(private routerActive: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private categoryService: CategoryService,
    private router: Router,
    private cookieService: CookieService
  ) {
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
  ngOnInit(): void {
    this.routerActive.params.subscribe((params: any) => {
      if (params) {

        this.productService.getProducts().subscribe((products) => {
          this.products = products;
          this.filterProducts = this.products.filter((x: any) => x.idhuyen == params.id)
        });
        this.filterData = this.DropdownData.filter((x: any) => x.idhuyen == params.id)[0]
      }
    });
  }
  ngAfterViewChecked(): void {
    if (this.isCartUpdated) {
      this.cartService.getItems().subscribe((item) => {
        this.carts = item;
      });
      this.isCartUpdated = false;
    }
  }
  addToCart(id: any) {
    if (this.userInfo) {
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingItem = this.carts.find((item) => item.product.id === id);
      this.productService
        .getProductById(id)
        .pipe(tap((cart) => { }))
        .subscribe((cart) => {
          this.cart = cart;
        });

      if (!!existingItem) {
        const quantity = +existingItem?.quantity + 1;
        // Nếu sản phẩm đã có, tăng số lượng lên 1
        this.cartService
          .updateCartQuantity(existingItem.id, quantity)
          .subscribe((updatedCart) => {
            this.cartService.getItems().subscribe((items) => {
              this.carts = items;
              alert('Sản phẩm đã được thêm vào giỏ hàng!');
              if (confirm('Bạn có muốn thanh toán luôn không?')) {
                this.router.navigate(['/cart']);
              }
            });
          });
      } else {
        this.cartService.addItem(id, 1).subscribe(
          () => {
            this.isCartUpdated = true;
            // this.cartService.addCartItem(id, this.cart, 1).subscribe();
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
            if (confirm('Bạn có muốn thanh toán luôn không?')) {
              this.router.navigate(['/cart']);
            }
          },
          (error) => {
            console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại sau.');
          }
        );
      }
    } else {
      alert('Bạn cần đăng nhập để mua hàng!');
      this.router.navigate(['/login']);
    }
  }
}
