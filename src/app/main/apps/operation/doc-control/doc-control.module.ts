import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { DocControlComponent } from './doc-control.component';
import { FeatherModule } from 'app/main/ui/icons/feather/feather.module';

// routing
const routes: Routes = [
  {
    path: '**',
    component: DocControlComponent,
    data: { animation: 'apex' }
  }
];

@NgModule({
  declarations: [DocControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    CardSnippetModule,
    Ng2FlatpickrModule,
    CoreCommonModule,
    NgbModule, 
    FeatherModule,
  ],
  exports: [
    FeatherModule
  ]
})
export class DocControlModule {}
