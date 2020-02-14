import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-java-component-library',
  template: `
    <p *ngIf="message">
      Girilen Karakter Sayısı {{message.length}}
    </p>
  `,
  styles: []
})
export class JavaComponentLibraryComponent implements OnInit {

  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
