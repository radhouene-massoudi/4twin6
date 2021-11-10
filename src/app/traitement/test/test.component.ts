import { TestService } from './../../service/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service:TestService) { }

  ngOnInit(): void {
    this.service.showMsg();
  }

}
