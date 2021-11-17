import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  ListProduct:any=[];
  nb=0;
  j=-1;
  constructor(private p: ProductService) { }

  ngOnInit(): void {
    //console.log(this.p.fetchProducts());
   //this.ListProduct=this.p.fetchProducts();
    this.p.fetchProdut().subscribe(
      (d)=>{
        this.ListProduct=d;
      }
    );

  }
  score(lib:any,t:any){
    this.j=t;

  }

}
