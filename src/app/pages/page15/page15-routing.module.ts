import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page15Page } from './page15.page';

const routes: Routes = [
  {
    path: '',
    component: Page15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page15PageRoutingModule {}
