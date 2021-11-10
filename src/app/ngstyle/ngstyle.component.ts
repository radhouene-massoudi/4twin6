import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  toggole=true;
  people: any[] = [
    {
      
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
showMyColor(color:String){
  switch(color){
default:
  return 'red';
  case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';


  }
}
changeStatus(){
  this.toggole=!this.toggole;
  

}

}
