import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() user!:any;
@Output() notif=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    //console.log(this.test)
  }

  sendnotiftoparent(t:any){
    this.notif.emit(t);
  }

}
