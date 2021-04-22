import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../ApiService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dmitry',
  templateUrl: './dmitry.component.html',
  styleUrls: ['./dmitry.component.css']
})
export class DmitryComponent implements OnInit {
  _apiService: ApiService;
  public site = "https://comp4514bcit.azurewebsites.net/api";

  secureData: string = '';
  accessCode = '';
  errorMessage = '';
  ip = '';
  userId = '';
  userName = '';

  constructor(private http: HttpClient, private router: Router) {
    this._apiService = new ApiService(http, this);
    this.getSecureData();
  }

  ngOnInit(): void {
  }

  getSecureData() {
    var url = this.site + '/login/FinalExamData'

    // Passing in the reference to the callback function.
    this._apiService.getData(url, this.secureDataCallback);
  }

    // Callback needs a pointer '_this' to current instance.
    secureDataCallback(result, _this) {
      if (result.errorMessage == "") {
        _this.secureData = result;
        _this.accessCode = result.accessCode;
        _this.errorMessage = result.errorMessage;
        _this.ip = result.ip;
        _this.userId = result.userId;
        _this.userName = result.userName;

        console.log(_this.secureData);

      }
      else {
        alert(JSON.stringify(result.errorMessage));
      }
    }

}
