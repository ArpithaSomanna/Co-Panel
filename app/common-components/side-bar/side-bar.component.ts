import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonHttpService } from 'src/app/http/common-http.service';
import { HttpUrls } from 'src/app/http/url.config';
import { SideBarService } from './side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnChanges {
  @Input() rolePermissions: any;
  @Input() loggedInUser: any;
  sideBarConfig: any;
  menuItems: any[] = [];

  constructor(
    private sideBarService: SideBarService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.loggedInUser && changes.loggedInUser.currentValue) {
      this.getSidebarConfiguration();
    }
  }

  ngOnInit() {}

  getSidebarConfiguration() {
    this.sideBarService.getSidebarConfig(this.loggedInUser.role).subscribe(response => {
      this.sideBarConfig = response;
      this.getSidebarForCurrentRole();
    });
  }

  getSidebarForCurrentRole() {
    this.menuItems = this.sideBarService.configureSidebar(this.rolePermissions.permissions, this.sideBarConfig);
  }

}
