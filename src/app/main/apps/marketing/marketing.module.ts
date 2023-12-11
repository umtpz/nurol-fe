import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { MarketingComponent } from './marketing.component';
import { MarketingTableComponent } from './marketing-table/marketing-table.component';

// routing
const routes: Routes = [
  {
    path: '**',
    component: MarketingComponent,
    data: { animation: 'apex' }
  }
];

@NgModule({
  declarations: [MarketingComponent, MarketingTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    CardSnippetModule,
    Ng2FlatpickrModule,
    CoreCommonModule,
    NgbModule
  ]
})
export class MarketingModule {}
