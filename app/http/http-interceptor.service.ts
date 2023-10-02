import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newHeaders = req.headers;
    // const token = '';
    // if (token) {
    //   newHeaders = newHeaders.append('authtoken', token);
    // }
    // newHeaders = newHeaders.append('Content-Type', 'application/json');
    // const authReq = req.clone({ headers: newHeaders });
    return next.handle(req);
  }
}
