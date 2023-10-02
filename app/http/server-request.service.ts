import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(requestObject: HttpRequestObject) {
    return this.httpClient.get(requestObject.url);
  }

  post(requestObject: HttpRequestObject) {
    return this.httpClient.post(requestObject.url, requestObject.payload);
  }

  put(requestObject: HttpRequestObject) {

  }

  patch(requestObject: HttpRequestObject) {

  }

  delete(requestObject: HttpRequestObject) {

  }
}

export interface HttpRequestObject {
  url: string;
  queryParam?: any;
  payload?: any;
}
