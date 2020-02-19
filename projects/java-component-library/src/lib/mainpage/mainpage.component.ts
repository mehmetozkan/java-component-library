import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lib-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  types = null;
  constructor() { }

  ngOnInit() {
  }

  onclicktype(name) {
    this.types = name;
  }
}
