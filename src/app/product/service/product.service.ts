import { Product } from './../../product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products !:Product[];
  baseurl=environment.url;
  constructor(private http:HttpClient) {

   }

  fetchProducts(){
    return this.http.get<any>(this.baseurl+'product');
  }
  
}
