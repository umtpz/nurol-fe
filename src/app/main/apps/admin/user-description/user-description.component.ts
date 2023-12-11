import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss']
})
export class UserDescriptionComponent implements OnInit {
  users = [
    { id: 1, name: 'NGSS', identityNumber: '12345678901', email: 'info@ngss.io', phone: '+905421111111', role: 'Admin' },
    { id: 2, name: 'NGSS', identityNumber: '12345678901', email: 'info@ngss.io', phone: '+905421111112', role: 'Pazarlama' },
    { id: 3, name: 'NGSS', identityNumber: '12345678901', email: 'info@ngss.io', phone: '+905421111113', role: 'Operasyon' },
    { id: 4, name: 'NGSS', identityNumber: '12345678901', email: 'info@ngss.io', phone: '+905421111114', role: 'Gözlem' },
  ];

  selectedUser: any = { role:"role" };

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(user: any): void {
    this.selectedUser = Object.assign({}, user);
  }

}