import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { productInfo } from 'src/assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public products: productInfo[] = [];
  constructor(private ProductsService: ProductsService){
    this.ProductsService.subject.subscribe(data => this.products = data)
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
}
