import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page10Page } from './page10.page';

const routes: Routes = [
  {
    path: '',
    component: Page10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page10PageRoutingModule {}
