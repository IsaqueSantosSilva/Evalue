import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page13Page } from './page13.page';

const routes: Routes = [
  {
    path: '',
    component: Page13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page13PageRoutingModule {}
