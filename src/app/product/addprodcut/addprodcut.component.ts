import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addprodcut',
  templateUrl: './addprodcut.component.html',
  styleUrls: ['./addprodcut.component.css']
})
export class AddprodcutComponent implements OnInit {
//test:any;
  constructor(private service:ProductService, private route:Router ) { }

  ngOnInit(): void {
  }
  submit(f:any){

    this.service.addProduct(f).subscribe(
      (d)=>{
       //console.log('good');
        this.route.navigateByUrl('products');
      },
      (error)=>{
        console.log(error.stattus);
      },
      ()=>{
        console.log('complete');
      }

    );
   //this.test= this.service.addProducts(f);
   //console.log(this.test);
   //this.route.navigateByUrl('products')
  }
}
