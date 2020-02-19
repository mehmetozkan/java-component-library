import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  href = '';
  types = null;
  public route: string;

  constructor(private rte: Router) {
  }

  ngOnInit() {
    this.route = this.rte.url;

    console.log(this.route);
  }

  onclicktype(name) {
    this.types = name;
  }
}
