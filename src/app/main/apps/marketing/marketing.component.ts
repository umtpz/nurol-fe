import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedAction = "dealer"
  showActionDropdown = true

  items = [
    // Table Data
    { requestId: 123456, id: 12345678901, name: 'NGSS', birthday: '01/01/2023', mail: '123@456.789', phone: '+90 123 456 78 90', priority: 'Firma Sahibi', status: 'inactive' },
    { requestId: 123457, id: 12345678901, name: 'NGSS', birthday: '01/01/2023', mail: '123@456.789', phone: '+90 123 456 78 90', priority: 'Satışçı', status: 'active' },
  ];

  dealerItems = [{id:1, dealerId:1, dealerName:"",financial:""},{id:2, dealerId:2, dealerName:"",financial:""}, ]

  onActionChanged(){

  }
}
