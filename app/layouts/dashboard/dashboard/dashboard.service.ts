import { Injectable } from '@angular/core';
import { CommonHttpService } from 'src/app/http/common-http.service';
import { HttpUrls } from 'src/app/http/url.config';
import { forkJoin } from 'rxjs';
import { DynamicTableConfig } from 'src/app/dynamic-form/dynamic-table/dynamic-table-base';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private commonHttpService: CommonHttpService
  ) { }

  getDashboardConfigActivity() {
    return forkJoin(this.commonHttpService.apiRequest({url: HttpUrls.activity.dashboardConfig.url,
    type: HttpUrls.activity.dashboardConfig.type, payload: null}),
    this.commonHttpService.apiRequest({
      url: HttpUrls.activity.dashboard.url,
      type: HttpUrls.activity.dashboard.type, payload: null
    }));
  }

  configureDashboardData(config, activity) {
    let configuredDashboard: any;
    configuredDashboard = config.filter(conf => {
      if (activity.modules && activity.modules[conf.name]) {
        return conf.moduleDetails = activity.modules[conf.name];
      }
    });
    return configuredDashboard;
  }

  getDashboardActivityConfigured(activity) {
    console.log('activity', activity.activity.attendanceTracker);

    const data: DynamicTableConfig = {
      tableHeaders: [
        { title: 'Name' }, { title: 'Working Hours' }, { title: 'Shift' },
        { title: 'Role' }, { title: 'Attendance Status' }
      ],
      keys: [],
      tableData: []
    };

    // data.tableData = activity.activity.attendanceTracker.map(arg => {
    //   const dat = {
    //     name: arg.name,
    //     attendanceStatus: arg.attendanceStatus,
    //     roleName: arg.role.name,
    //     roleGrade: arg.role.grade,
    //     workingTime: arg.working.timing,
    //     workingShift: arg.working.shift
    //   };
    //   if (!data.keys.length) {
    //     data.keys = Object.keys(dat)
    //   }
    //   return dat;
    // });

    console.log(data);

    return data;
  }

  // getKeys(obj) {
  //   for(const prop in obj) {
  //     if (obj.hasOwnProperty(prop)) {
  //       if (typeof obj[prop] === 'object') {
  //         this.getKeys(obj[prop]);
  //       } else {
  //         console.log(`Key: ${prop} 'value: ${obj[prop]}`);
  //       }
  //     }
  //   }
  // }
}

