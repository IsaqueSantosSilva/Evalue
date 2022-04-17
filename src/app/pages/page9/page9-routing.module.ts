import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page9Page } from './page9.page';

const routes: Routes = [
  {
    path: '',
    component: Page9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page9PageRoutingModule {}
