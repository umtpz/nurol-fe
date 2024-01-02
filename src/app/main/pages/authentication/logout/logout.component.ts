import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/auth/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this._authenticationService.logout();
    this._router.navigate(['/pages/authentication/login-v2']);
  }

}
