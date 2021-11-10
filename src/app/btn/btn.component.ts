import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
show=true;

  constructor() { }

  ngOnInit(): void {
  }
changeStatuts(){
  if(this.show==true){
    this.show=false;
  }
  else if(this.show==false)
    this.show=true;
  
}
}
