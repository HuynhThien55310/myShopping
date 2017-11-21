import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getProducts() {
    return this._http.get('/products')
      .map(res => res.json());
  }

}
