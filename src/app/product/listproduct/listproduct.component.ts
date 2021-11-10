import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  ListProduct!:Product[];
  nb=0;
  j=-1;
  constructor(private p: ProductService) { }

  ngOnInit(): void {
   this.p.fetchProducts().subscribe(
     (d)=>{
       console.log(d);
       this.ListProduct=d;
     },
     (error)=>{
console.log(error.status);

     },
     ()=>{
alert('dfg,dmhlkdf');
     }
   );
  }
  score(lib:any,t:any){
    this.j=t;

  }

}
