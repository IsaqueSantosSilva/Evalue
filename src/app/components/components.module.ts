import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModaloneComponent } from './modalone/modalone.component';
import { ModaltwoComponent } from './modaltwo/modaltwo.component';

@NgModule({
  imports: [RouterModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    ModaloneComponent,
    ModaltwoComponent,
  ],

  exports: [
    FooterComponent,
    HeaderComponent,
    ModaloneComponent,
    ModaltwoComponent,
  ],
})
export class ComponentsModule {}
