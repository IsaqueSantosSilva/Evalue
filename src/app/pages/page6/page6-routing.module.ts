import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page6Page } from './page6.page';

const routes: Routes = [
  {
    path: '',
    component: Page6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page6PageRoutingModule {}
