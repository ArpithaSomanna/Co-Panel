import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/http/common-http.service';
import { HttpUrls } from 'src/app/http/url.config';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LAYOUT_MODULES } from '../layout.const';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements OnInit {
  layoutModules = LAYOUT_MODULES;
  loggedInUser: any;
  rolePermissions: any;
  constructor(
    private sharedService: SharedService,
    private commonHttpService: CommonHttpService
  ) {
    this.loggedInUser = this.sharedService.getLoggedInUserDetails();
    this.getUserRolePermissions();
  }

  getUserRolePermissions() {
    this.commonHttpService.apiRequest({ url: `${HttpUrls.userRole.rolePermission.url}/${this.loggedInUser.role}`,
      type: HttpUrls.userRole.rolePermission.type, payload: null}).subscribe(response => {
        this.rolePermissions = response.data;
    });
  }

  ngOnInit() {
  }

}
