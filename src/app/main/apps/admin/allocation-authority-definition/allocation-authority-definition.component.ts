import { Component, OnInit } from '@angular/core';

interface Authority {
  name: string;
  minAmount: number;
  maxAmount: number;
}

@Component({
  selector: 'app-allocation-authority-definition',
  templateUrl: './allocation-authority-definition.component.html',
  styleUrls: ['./allocation-authority-definition.component.scss']
})
export class AllocationAuthorityDefinitionComponent implements OnInit {
  selectedFinanceType: string | null = "finance";

  authorities: Authority[] = [
    { name: 'Tahsis 1', minAmount: 0, maxAmount: 400000 },
    { name: 'Tahsis 2', minAmount: 400001, maxAmount: 800000 },
    { name: 'Tahsis 3', minAmount: 800001, maxAmount: 1200000 },
    { name: 'Tahsis 4', minAmount: 1200001, maxAmount: 999999999 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  retrieveData(): void {
    if (this.selectedFinanceType) {
      console.log('Seçilen Finansman Türü:', this.selectedFinanceType);
    } else {
      console.warn('Lütfen bir finansman türü seçiniz.');
    }
  }

}
