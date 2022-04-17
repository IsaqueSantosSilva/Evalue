import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page8PageRoutingModule } from './page8-routing.module';

import { Page8Page } from './page8.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page8PageRoutingModule
  ],
  declarations: [Page8Page]
})
export class Page8PageModule {}
