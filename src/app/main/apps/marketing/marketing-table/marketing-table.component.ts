import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-marketing-table',
  templateUrl: './marketing-table.component.html',
  styleUrls: ['./marketing-table.component.scss']
})
export class MarketingTableComponent implements OnInit {

  constructor() { }

  items = [
    // Table Data
    { requestId: 123456, id: 12345678901, name: 'NGSS', birthday: '01/01/2023', mail: '123@456.789', phone: '+90 123 456 78 90', priority: 'Firma Sahibi' },
    { requestId: 123457, id: 12345678901, name: 'NGSS', birthday: '01/01/2023', mail: '123@456.789', phone: '+90 123 456 78 90', priority: 'Satışçı' },
  ];

  ngOnInit(): void {
  }

}
