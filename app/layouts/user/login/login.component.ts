import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { SharedDynamicService } from 'src/app/shared/services/shared-dynamic.service';
import { DynamicFormOutput } from 'src/app/dynamic-form/common/dynamic-form-constants';
import { LoginService } from './login.service';
import { RoutingCongiguration } from 'src/app/shared/navigation/routing.config';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginScreenConfig;
  dynamicLoginConfig;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private sharedService: SharedService,
    private sharedDynamicConfig: SharedDynamicService
  ) {
    this.getLoginScreenConfiguration();
  }

  ngOnInit() {}

  getLoginScreenConfiguration() {
    // this.loginService.loginConfiguration().subscribe(response => {
    //     this.loginScreenConfig = response;
    //     this.dynamicLoginConfig = this.sharedDynamicConfig.getDynamicFormConfig(this.loginScreenConfig);
    // });
    this.loginScreenConfig = [
      {
          "value": "",
          "key": "userName",
          "label": "Username",
          "required": true,
          "order": 1,
          "controlType": "textbox",
          "type": "textbox",
          "placeholder": "Username",
          "flexLayout": {
              "fxLayout": "row",
              "fxLayoutAlign": "center center"
          },
          "inputFieldCss": {
              "divCss": "col-md-8",
              "matFormFieldCss": "example-full-width"
          }
      },
      {
          "value": "",
          "key": "password",
          "label": "Password",
          "required": true,
          "order": 2,
          "controlType": "textbox",
          "type": "password",
          "placeholder": "Password",
          "flexLayout": {
              "fxLayout": "row",
              "fxLayoutAlign": "center center"
          },
          "inputFieldCss": {
              "divCss": "col-md-8",
              "matFormFieldCss": "example-full-width"
          }
      }
    ];
    
    this.dynamicLoginConfig = this.sharedDynamicConfig.getDynamicFormConfig(this.loginScreenConfig);
  }


  onFormChange(event: DynamicFormOutput) {
    this.loginForm = event.form;
  }

  login() {
    this.loginService.userLogin(this.loginForm).subscribe(response => {
      this.sharedService.saveLoggedInUserDetails(response);
      this.router.navigate([RoutingCongiguration.navigateTo.dashboard]);
    });
  }

}
