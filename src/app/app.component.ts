/**
 *
 * Copyright 2017, Andrea Sonny, All rights reserved.
 *
 * @author: Andrea Sonny <andreasonny83@gmail.com>
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-app',
  styleUrls: ['./app.component.css'],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>Copyright 2016-2017, <a [href]="url">andreasonny83</a>, All rights reserved.</span>
    </footer>
  `
})
export class AppComponent implements OnInit {
  url = 'https://github.com/andreasonny83';

  ngOnInit() {
    console.log('App Started');
  }
}
