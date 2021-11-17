import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
product!:any;
  constructor(private service:ProductService,
             // private routeer:Router,
              private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getProductById(this.activatedroute.snapshot.params.id)
      .subscribe(
        (d)=>{

          this.product=d;

        }
      );

  }

}
