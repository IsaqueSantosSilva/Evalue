import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page9PageRoutingModule } from './page9-routing.module';

import { Page9Page } from './page9.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page9PageRoutingModule
  ],
  declarations: [Page9Page]
})
export class Page9PageModule {}
