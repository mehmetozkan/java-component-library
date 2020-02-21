import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed: Boolean = true;
  public types = null;
  constructor() { }

  ngOnInit() {
  }
  onclicktype(name) {
    this.types = name;
  }
}
