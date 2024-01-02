import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface User {
  appNumber: number;
  identityNumber: string;
  name: string;
  dealer: string;
  user: string;
  uploadTime: string;
}

interface DocumentItem {
  name: string;
  viewed: boolean;
  confirmed: boolean;
  rejected: boolean;
  remark?: string;
  comment: string;
}

@Component({
  selector: 'app-doc-control',
  templateUrl: './doc-control.component.html',
  styleUrls: ['./doc-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocControlComponent implements OnInit {
  users: User[] = [
    { appNumber: 111111, identityNumber: '12345678901', name: 'NGSS',  dealer: 'Göztepe', user: 'NGSS', uploadTime: "2023-04-01 10:00:00"},
    { appNumber: 111112, identityNumber: '12345678901', name: 'NGSS',  dealer: 'Göztepe', user: 'NGSS', uploadTime: "2023-04-01 11:00:00"},
  ];

  documents: DocumentItem[] = [
    { name: 'Kimlik Fotokopisi', viewed: false, confirmed: false, rejected: false, comment:"" },
    { name: 'Rehin Sözleşmesi',  viewed: false, confirmed: true, rejected: false, comment:"" },
    { name: 'Uzaktan İşlem Sözleşmesi', viewed: false, confirmed: false, rejected: false, comment:"" },
    { name: 'Sigorta', viewed: false, confirmed: false, rejected: false, comment:"" },
    { name: 'Ruhsat', viewed: false, confirmed: false, rejected: true, comment:"Ruhsat başka plakaya ait" },
  ];

  decisionNeeded = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewDocument(index: number): void {
    this.documents[index].viewed = true;
    //* Document viewing operations
  }

  toggleConfirm(index: number): void {
    this.documents[index].confirmed = !this.documents[index].confirmed;
    if (this.documents[index].confirmed) {
      this.documents[index].rejected = false;
      this.documents[index].remark = '';
    }
  }

  toggleReject(index: number): void {
    this.documents[index].rejected = !this.documents[index].rejected;
    if (this.documents[index].rejected) {
      this.documents[index].confirmed = false;
    }
  }

  saveDocuments(): void {
    //* Approval/rejection status transactions of documents
  }
  
}