import { Injectable } from '@angular/core';
import { CommonHttpService } from 'src/app/http/common-http.service';
import { HttpUrls } from 'src/app/http/url.config';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private commonHttpService: CommonHttpService) {}

  loginConfiguration() {
    return this.commonHttpService.apiRequest({ url: HttpUrls.usermodule.loginScreenConfig.url,
      type: HttpUrls.usermodule.loginScreenConfig.type, payload: null});
  }

  userLogin(loginForm: FormGroup) {
    return this.commonHttpService.apiRequest({ url: HttpUrls.usermodule.login.url,
      payload: { userName: loginForm.value.userName, password: loginForm.value.password }, type: HttpUrls.usermodule.login.type});
  }
}
