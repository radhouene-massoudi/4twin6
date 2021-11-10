import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-st',
  templateUrl: './st.component.html',
  styleUrls: ['./st.component.css']
})
export class StComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
    //this.routes.navigate
  }

}
