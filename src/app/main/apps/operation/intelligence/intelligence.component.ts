import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Application {
  applicationNumber: string;
  identityNumber: string;
  fullName: string;
  dealer: string;
  fraudSuspicion: boolean;
  productVerification: boolean;
  registerCode?: string;
}

interface CustomerDetails {
  fullName: string;
  identityNumber: string;
  birthDate: string;
  motherMaidenName: string;
  identitySerialNumber: string;
  mobilePhone: string;
  email: string;
  workType: string;
  occupation: string;
  educationStatus: string;
  workplaceName: string;
  workplaceTaxId: string;
  monthlyIncome: string;
  workplaceAddress: string;
  workplaceCity: string;
  workplaceDistrict: string;
  workplacePhone: string;
  employmentDuration: string;
  homeOwnership: string;
  deliveryAddress: string;
}

interface BasketDetails {
  applicationNumber: string
  financeType: 'SecondHandVehicle' | 'Need';
  brand: string;
  productCategory: string;
  product: string;
  salePrice: string;
  quantity: number;
  totalSalePrice: string;
  year?: number;
  plate?: string;
  mileage?: number;
  consignment?: boolean;
  chassisNumber?: string;
  insuranceValue?: string;
  endUse?: string;
  tramerDamageValue?: string;
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
      productVerification: true
    },
    {
      applicationNumber: '532761',
      identityNumber: '12345678901',
      fullName: 'NGSS',
      dealer: 'Göztepe Bayi',
      fraudSuspicion: false,
      productVerification: false
    },
    {
      applicationNumber: '593766',
      identityNumber: '12345678901',
      fullName: 'NGSS',
      dealer: 'Göztepe Bayi',
      fraudSuspicion: false,
      productVerification: false
    },
    {
      applicationNumber: '600348',
      identityNumber: '12345678901',
      fullName: 'NGSS',
      dealer: 'Göztepe Bayi',
      fraudSuspicion: true,
      productVerification: false
    }
  ];

  customerDetailsData: CustomerDetails[] = [
    {
      fullName: 'Ali Yılmaz',
      identityNumber: '112******56',
      birthDate: '11/11/1972',
      motherMaidenName: 'Ö***n',
      identitySerialNumber: 'AB********21',
      mobilePhone: '05324442266',
      email: 'ali.yilmaz@gmail.com',
      workType: 'Serbest Meslek',
      occupation: 'Terzi',
      educationStatus: 'Lise',
      workplaceName: 'Terzi Ustası',
      workplaceTaxId: '332*********88',
      monthlyIncome: '40.000₺',
      workplaceAddress: 'Lorem ipsum...',
      workplaceCity: 'İstanbul',
      workplaceDistrict: 'Maltepe',
      workplacePhone: '02128889977',
      employmentDuration: '5+',
      homeOwnership: 'Kendi Evi',
      deliveryAddress: 'Lorem ipsum...'
    }
  ]

  basketDetailsData : BasketDetails[] = [
    {
      applicationNumber : '452234',
      financeType: 'SecondHandVehicle',
      brand: 'BMW',
      productCategory: 'Araç',
      product: '520i SEDAN 1.6 170 SPORT LINE',
      salePrice: '1.500.000 ₺',
      quantity: 1,
      totalSalePrice: '1.500.000 ₺',
      year: 2020,
      plate: '34 ABC 123',
      mileage: 12000,
      consignment: true,
      chassisNumber: '222222222222',
      insuranceValue: '1.400.000 ₺',
      endUse: 'Hususi',
      tramerDamageValue: '0 ₺'
    },
    {
      applicationNumber: '600348',
      financeType: 'Need',
      brand: 'Arçelik',
      productCategory: 'Beyaz Eşya',
      product: 'Buzdolabı, Klima',
      salePrice: '45.000 TL',
      quantity: 1,
      totalSalePrice: '45.000 TL',
    }
  ]

  filteredApplications: Application[] = []; 
  selectedApplication: Application | null = null;

  //* Search Criteria for filtering
  searchCriteria = {
    identityNumber: '',
    applicationNumber: '',
  };

  //* To check whether a call is made or not
  searchMade = false;

  activeTab: string | null = null;

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
    this.activeTab = null;
  }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  //* Method to control the visibility of the back button
  shouldShowBackButton(): boolean {
    return this.activeTab !== null;
  }

  getBasketDetailsByApplicationNumber(applicationNumber: string): BasketDetails | undefined {
    return this.basketDetailsData.find(
      (details) => details.applicationNumber === applicationNumber
    );
  }

}