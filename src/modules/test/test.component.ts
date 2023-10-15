import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  LOAD_LINK_COMPONENT: string = '';
  constructor() {
    this.LOAD_LINK_COMPONENT = `http://localhost:7003/main.js?v=${Date.now()}`;
  }

  ngOnInit() {}
}
