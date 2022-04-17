import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page13PageRoutingModule } from './page13-routing.module';

import { Page13Page } from './page13.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page13PageRoutingModule
  ],
  declarations: [Page13Page]
})
export class Page13PageModule {}
