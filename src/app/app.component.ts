import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './services/products.service';
import { productInfo } from 'src/assets/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  public products: productInfo[] = [];
  private subscription: Subscription;
  constructor(private ProductsService: ProductsService){
    this.subscription = this.ProductsService.subject.subscribe(data => this.products = data)
  }

  ngOnInit() {
    this.products = this.ProductsService.getProducts();
  }

  onSort($event:any) {
    this.ProductsService.sortProducts(
      this.ProductsService.subject.getValue(),
      $event.target.value
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
