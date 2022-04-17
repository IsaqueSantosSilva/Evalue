import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page18PageRoutingModule } from './page18-routing.module';

import { Page18Page } from './page18.page';

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Page18PageRoutingModule
  ],
  declarations: [Page18Page]
})
export class Page18PageModule {}
