import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page15PageRoutingModule } from './page15-routing.module';

import { Page15Page } from './page15.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page15PageRoutingModule
  ],
  declarations: [Page15Page]
})
export class Page15PageModule {}
