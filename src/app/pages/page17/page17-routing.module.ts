import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page17Page } from './page17.page';

const routes: Routes = [
  {
    path: '',
    component: Page17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page17PageRoutingModule {}
