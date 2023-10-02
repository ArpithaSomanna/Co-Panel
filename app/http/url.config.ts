import { environment } from '../../environments/environment';
import { HTTP_METHODS } from './http-methods-const';

export class HttpUrls {
  static localUrl = environment.localUrl;

  static usermodule = {
    login: { url: `${HttpUrls.localUrl}/user/login`, type: HTTP_METHODS.POST },
    loginScreenConfig: { url: `${HttpUrls.localUrl}/user/loginScreen`, type: HTTP_METHODS.GET }
  };
  static userRole = {
    rolePermission: { url: `${HttpUrls.localUrl}/rolePermissions`, type: HTTP_METHODS.GET }
  };
  static sideBar = {
    sideBarConfig: { url: `${HttpUrls.localUrl}/sideBarConfig`, type: HTTP_METHODS.POST }
  };
  static activity = {
    dashboardConfig: { url: `${HttpUrls.localUrl}/activity/dashboardConfig`, type: HTTP_METHODS.GET },
    dashboard: { url: `${HttpUrls.localUrl}/activity/dashboard`, type: HTTP_METHODS.POST }
  };
}
