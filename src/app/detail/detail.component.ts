import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      (test)=>{
        console.log(test);
        
      }
    );
    
    //console.log(this.activatedroute.snapshot.params.id)
  }

}
