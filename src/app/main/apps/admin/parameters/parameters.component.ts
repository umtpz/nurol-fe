import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {
  activeTab: string = 'general';

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}