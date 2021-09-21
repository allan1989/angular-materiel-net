import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.ProductsService.getBrands())
  }

}
