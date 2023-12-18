import { Component } from '@angular/core';

interface Application {
  applicationNumber: string;
  identityNumber: string;
  fullName: string;
  dealer: string;
  fraudSuspicion: boolean;
  productVerification: boolean;
  registerCode?: string;
}

@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.scss']
})
export class IntelligenceComponent {
  applications: Application[] = [
    {
      applicationNumber: '452234',
      identityNumber: '12345678901',
      fullName: 'NGSS',
      dealer: 'Göztepe Bayi',
      fraudSuspicion: true,
      productVerification: true,
    },
    {
      applicationNumber: '532761',
      identityNumber: '12345678901',
      fullName: 'NGSS',
      dealer: 'Göztepe Bayi',
      fraudSuspicion: false,
      productVerification: false,
    },
    {
      applicationNumber: '593766',
      identityNumber: '12345678901',
      fullName: 'NGSS',
      dealer: 'Göztepe Bayi',
      fraudSuspicion: false,
      productVerification: false,
    },
    {
      applicationNumber: '600348',
      identityNumber: '12345678901',
      fullName: 'NGSS',
      dealer: 'Göztepe Bayi',
      fraudSuspicion: true,
      productVerification: false,
    }
  ];

  filteredApplications: Application[] = []; 
  selectedApplication: Application | null = null;

  //* Search Criteria for filtering
  searchCriteria = {
    identityNumber: '',
    applicationNumber: '',
  };

  //* To check whether a call is made or not
  searchMade = false;

  searchApplications(): void {
    this.searchMade = true;
    this.selectedApplication = null;
    this.filteredApplications = this.applications.filter(app => 
      (this.searchCriteria.identityNumber === '' || app.identityNumber === this.searchCriteria.identityNumber) &&
      (this.searchCriteria.applicationNumber === '' || app.applicationNumber === this.searchCriteria.applicationNumber)
    );
  }

  selectApplication(application: Application): void {
    this.selectedApplication = application;
  }
}