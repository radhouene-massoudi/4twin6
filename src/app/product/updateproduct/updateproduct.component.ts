import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id:any;
for:any;
  constructor(private service: ProductService,
              private activatedroute: ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params.id;
    console.log(this.id);
    this.service.getProductById(this.id).subscribe(
      (d)=>{
        this.for=d;
        console.log(this.for);
      },
      (error)=>{
        alert('error');
      }
    );
  }

submit(f:any){
this.service.updateProduct(this.id,f).subscribe(
  (d)=>{
    this.route.navigateByUrl('products');
  }
);
}
}
