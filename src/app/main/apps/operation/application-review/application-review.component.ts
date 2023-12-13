import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-review',
  templateUrl: './application-review.component.html',
  styleUrls: ['./application-review.component.scss']
})
export class ApplicationReviewComponent implements OnInit {

  constructor() { }

  items=[{},{},{},{},]
  selectedTab = 3;
  isCar = true;

  ngOnInit(): void {
  }

  tabSelection(i){
    this.selectedTab = i
  }

}
