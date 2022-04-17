import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page8Page } from './page8.page';

const routes: Routes = [
  {
    path: '',
    component: Page8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page8PageRoutingModule {}
