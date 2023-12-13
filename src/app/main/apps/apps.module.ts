import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { AdminComponent } from './admin/admin.component';

// routing
const routes: Routes = [
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'marketing',
    loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule)
  },
  {
    path: 'application-review',
    loadChildren: () => import('./operation/application-review/application-review.module').then(m => m.AplicationReviewModule)
  },
  {
    path: 'doc-control',
    loadChildren: () => import('./operation/doc-control/doc-control.module').then(m => m.DocControlModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'user-description',
    loadChildren: () => import('./admin/user-description/user-description.module').then(m => m.UserDescriptionModule)
  },
  {
    path: 'parameters',
    loadChildren: () => import('./admin/parameters/parameters.module').then(m => m.ParametersModule)
  },
  {
    path: 'insurance-values-list',
    loadChildren: () => import('./admin/insurance-values-list/insurance-values-list.module').then(m => m.InsuranceValuesListModule)
  },
  {
    path: 'allocation-authority-definition',
    loadChildren: () => import('./admin/allocation-authority-definition/allocation-authority-definition.module').then(m => m.AllocationAuthorityDefinitionModule)
  }
];

FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);

@NgModule({
  declarations: [
  
    AdminComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AppsModule {}
