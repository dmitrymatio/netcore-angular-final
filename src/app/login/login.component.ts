import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public site = 'https://comp4514bcit.azurewebsites.net/api/login';
  password = 'x';
  username = 'pmcgee';

  token = '';
  message = 'Not logged in.';

  constructor(private http: HttpClient, private router: Router) {
    // Pass in http module and pointer to AppComponent.
    this.showContentIfLoggedIn();
  }


  ngOnInit(): void {
  }

  //------------------------------------------------------------
  // Either shows content when logged in or clears contents.
  //------------------------------------------------------------
  showContentIfLoggedIn() {
    // Logged in if token exists in browser cache.
    if (sessionStorage.getItem('auth_token') != null) {
      this.token = sessionStorage.getItem('auth_token');
      this.message = "The user has been logged in."
    }
    else {
      this.message = "Not logged in.";
      this.token = ''
    }
  }

  //------------------------------------------------------------
  // Log user in.
  //------------------------------------------------------------
  login() {
    let url = this.site;

    // This free online service receives post submissions.
    this.http.post(url, {
      Email: this.username,
      Password: this.password,
      RememberMe: false
    })
      .subscribe(
        // Data is received from the post request.
        (data) => {
          // Inspect the data to know how to parse it.
          console.log(JSON.stringify(data));

          if (data["tokenString"] != null) {
            this.token = data["tokenString"]
            sessionStorage.setItem('auth_token', data["tokenString"]);
            this.message = "The user has been logged in."
          }
        },
        // An error occurred. Data is not received.
        error => {
          alert(JSON.stringify(error));
        });
  }

}
