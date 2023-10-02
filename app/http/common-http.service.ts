import { Injectable } from '@angular/core';
import { ServerRequestService } from './server-request.service';
import { HTTP_METHODS } from './http-methods-const';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(
    private httpServerRequestService: ServerRequestService
  ) { }

  apiRequest(requestObject: CommonHttpRequest) {
    let response;
    switch (requestObject.type) {
      case HTTP_METHODS.POST:
        response = this.httpServerRequestService.post(requestObject);
        break;
      case HTTP_METHODS.GET:
        response = this.httpServerRequestService.get(requestObject);
        break;
      default:
        break;
    }
    return response;
  }
}

export interface CommonHttpRequest {
  url: string;
  type: string;
  payload: any;
}
