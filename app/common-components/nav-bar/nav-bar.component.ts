import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { APPLICATION_CONSTANTS } from 'src/app/shared/shared.const';
import { RoutingTitleCongig } from 'src/app/shared/navigation/routing.config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  NAVBAR_CONST = APPLICATION_CONSTANTS.NAVBAR;
  navBarTitle = '';
  constructor(private router: Router) {
    this.subscribeRouteChanges();
  }

  ngOnInit() {
  }

  subscribeRouteChanges() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if (RoutingTitleCongig.urls[event.url]) {
          this.navBarTitle = RoutingTitleCongig.urls[event.url].title;
        }
      }
    });
  }

}
