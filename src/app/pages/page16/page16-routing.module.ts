import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page16Page } from './page16.page';

const routes: Routes = [
  {
    path: '',
    component: Page16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page16PageRoutingModule {}
