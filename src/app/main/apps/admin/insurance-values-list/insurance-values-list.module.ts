import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ApexComponent } from 'app/main/charts-and-maps/charts/apex//apex.component';
import { InsuranceValuesListComponent } from './insurance-values-list.component';

// routing
const routes: Routes = [
  {
    path: '**',
    component: InsuranceValuesListComponent,
    data: { animation: 'apex' }
  }
];

@NgModule({
  declarations: [InsuranceValuesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    NgApexchartsModule,
    CardSnippetModule,
    Ng2FlatpickrModule,
    CoreCommonModule,
    NgbModule
  ]
})
export class InsuranceValuesListModule {}
