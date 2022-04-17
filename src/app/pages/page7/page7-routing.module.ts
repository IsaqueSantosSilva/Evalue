import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page7Page } from './page7.page';

const routes: Routes = [
  {
    path: '',
    component: Page7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page7PageRoutingModule {}
