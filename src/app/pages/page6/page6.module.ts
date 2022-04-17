import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page6PageRoutingModule } from './page6-routing.module';

import { Page6Page } from './page6.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page6PageRoutingModule
  ],
  declarations: [Page6Page]
})
export class Page6PageModule {}
