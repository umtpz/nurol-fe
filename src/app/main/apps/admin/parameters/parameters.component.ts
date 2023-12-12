import { Component, OnInit } from '@angular/core';

interface SecondHandRegulation {
  minAmount: number;
  maxAmount: number;
  maxTerm: number;
  maxCreditRate: number;
}

interface NeedLegislation {
  minAmount: number;
  maxAmount: number;
  maxTerm: number;
}
@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {
  activeTab: string = 'general';

  secondHandRegulations: SecondHandRegulation[] = [
    { minAmount: 0, maxAmount: 400000, maxTerm: 48, maxCreditRate: 70 },
    { minAmount: 400001, maxAmount: 800000, maxTerm: 36, maxCreditRate: 50 },
    { minAmount: 800001, maxAmount: 1200000, maxTerm: 24, maxCreditRate: 30 },
    { minAmount: 1200001, maxAmount: 2000000, maxTerm: 12, maxCreditRate: 20 },
    { minAmount: 2000001, maxAmount: 999999999, maxTerm: 0, maxCreditRate: 0 }
  ];

  needLegislations: NeedLegislation[] = [
    { minAmount: 0, maxAmount: 50000, maxTerm: 36},
    { minAmount: 50001, maxAmount: 100000, maxTerm: 24},
    { minAmount: 100001, maxAmount: 99999999, maxTerm: 12},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}