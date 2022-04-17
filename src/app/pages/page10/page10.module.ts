import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page10PageRoutingModule } from './page10-routing.module';

import { Page10Page } from './page10.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page10PageRoutingModule
  ],
  declarations: [Page10Page]
})
export class Page10PageModule {}
