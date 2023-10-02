import { Injectable } from '@angular/core';
import { CommonHttpService } from 'src/app/http/common-http.service';
import { HttpUrls } from 'src/app/http/url.config';
import { LAYOUT_MODULES } from 'src/app/layouts/layout.const';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor(
    private commonHttpService: CommonHttpService
  ) { }

  getSidebarConfig(userRole: string) {
     return this.commonHttpService.apiRequest({ url: HttpUrls.sideBar.sideBarConfig.url,
       type: HttpUrls.sideBar.sideBarConfig.type, payload: { role: userRole}});
  }

  configureSidebar(permissions, sidebarConfig) {
    let sideBar = [];
    permissions.forEach(rolePermissions => {
      sideBar = sidebarConfig.map(config => {
        if (rolePermissions.name === config.name) {
          config.visible = true;
          config.permission = rolePermissions.permissions;
        }
        return config;
      });
    });
    return sideBar;
  }
}
