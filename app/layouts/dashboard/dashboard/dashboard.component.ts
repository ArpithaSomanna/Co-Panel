import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

import { APPLICATION_CONSTANTS } from 'src/app/shared/shared.const';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  today = new Date();
  dashboard: {config: any, activity: any};
  dashboardActivity: any;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.getDashboardDetails();
  }

  getDashboardDetails() {
    this.dashboardService.getDashboardConfigActivity().subscribe((responses: any) => {
      this.dashboard = { config: responses[0].data, activity: responses[1].data};
      this.getConfiguredData();
      this.getActivityConfigured(this.dashboard.activity);
    });
  }

  getConfiguredData() {
    this.dashboard.config = this.dashboardService.configureDashboardData(this.dashboard.config, this.dashboard.activity);
    // console.log(this.dashboard.activity);
  }

  getActivityConfigured(activity) {
    this.dashboardActivity = this.dashboardService.getDashboardActivityConfigured(activity);
    // console.log(this.dashboardActivity);

  }

}
