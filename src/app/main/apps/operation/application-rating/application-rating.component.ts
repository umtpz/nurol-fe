import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-rating',
  templateUrl: './application-rating.component.html',
  styleUrls: ['./application-rating.component.scss']
})
export class ApplicationRatingComponent implements OnInit {

  constructor() { }
  items=[{},{},{},{},]
  selectedTab = 3;
  isCar = false;
  showDecision = false;

  ngOnInit(): void {
  }

  tabSelection(i){
    this.selectedTab = i
  }
}
