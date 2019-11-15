import {Component, OnInit, Inject} from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    @Inject(DOCUMENT) private document
  ) {
  }

    ngOnInit(): void {

    }
    title = 'a';


}
