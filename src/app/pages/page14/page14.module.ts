import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page14PageRoutingModule } from './page14-routing.module';

import { Page14Page } from './page14.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page14PageRoutingModule
  ],
  declarations: [Page14Page]
})
export class Page14PageModule {}
