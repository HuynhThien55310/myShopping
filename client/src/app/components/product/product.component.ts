import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products = [];

  constructor(private _productService: ProductService) {
      this._productService.getProducts().subscribe(res => this.products = res.products);
      console.log(this.products);
   }

  ngOnInit() {
  }

}
