import { Product } from './../../product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products :any =[];
  baseurl=environment.url;
  constructor(private http:HttpClient) {

   }
addProduct(data:any){
    return this.http.post(this.baseurl+'Product',data);
}
updateProduct(id:any,data:any){
    return this.http.put(this.baseurl+'Product/'+id,data);
}
deleteProduct(id:any){
    return this.http.delete(this.baseurl+'Product/'+id);
}

fetchProdut(){
    return this.http.get(this.baseurl+'Product/');
}
getProductById(id:any){
    return this.http.get(this.baseurl+'Product/'+id);
}





  fetchProducts(){
    //console.log(this.Products);
    return this.Products;
  }
  addProducts(p:any){
    this.Products.push(p);
    return this.Products;
  }
  
}
