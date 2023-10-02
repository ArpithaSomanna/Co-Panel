import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  saveLoggedInUserDetails(data) {
    localStorage.setItem('user', JSON.stringify(data.data));
  }

  getLoggedInUserDetails() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
