import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModaltwoComponent } from 'src/app/components/modaltwo/modaltwo.component';

@Component({
  selector: 'app-page15',
  templateUrl: './page15.page.html',
  styleUrls: ['./page15.page.scss'],
})
export class Page15Page {

  constructor(private modalCtrl: ModalController) { }

  async showModalTwo() {
    const modal = await this.modalCtrl.create({
      component: ModaltwoComponent,
      cssClass: 'myModal'
    });

    modal.present();
  }

}
