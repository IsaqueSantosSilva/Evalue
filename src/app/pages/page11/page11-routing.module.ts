import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page11Page } from './page11.page';

const routes: Routes = [
  {
    path: '',
    component: Page11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page11PageRoutingModule {}
