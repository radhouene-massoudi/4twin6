import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(private service: ProductService,
              private router: Router,
              private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.deleteProduct(this.activatedroute.snapshot.params.id)
      .subscribe(
      ()=>{
        this.router.navigateByUrl('products');
      },
      (error)=>{
        console.log(error);
      }
    );
  }



}
