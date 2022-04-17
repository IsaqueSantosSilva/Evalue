import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page17PageRoutingModule } from './page17-routing.module';

import { Page17Page } from './page17.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page17PageRoutingModule
  ],
  declarations: [Page17Page]
})
export class Page17PageModule {}
