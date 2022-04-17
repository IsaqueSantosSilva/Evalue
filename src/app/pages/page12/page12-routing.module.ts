import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page12Page } from './page12.page';

const routes: Routes = [
  {
    path: '',
    component: Page12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page12PageRoutingModule {}
