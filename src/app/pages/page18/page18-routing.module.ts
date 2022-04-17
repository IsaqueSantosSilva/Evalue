import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page18Page } from './page18.page';

const routes: Routes = [
  {
    path: '',
    component: Page18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page18PageRoutingModule {}
