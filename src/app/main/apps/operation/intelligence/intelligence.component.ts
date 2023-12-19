import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  styleUrls: ['./intelligence.component.scss'],
  encapsulation: ViewEncapsulation.None
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

  closeResult: string;

  constructor(private modalService: NgbModal) {}

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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}