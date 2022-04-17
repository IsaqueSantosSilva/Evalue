import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModaloneComponent } from 'src/app/components/modalone/modalone.component';

@Component({
  selector: 'app-page14',
  templateUrl: './page14.page.html',
  styleUrls: ['./page14.page.scss'],
})
export class Page14Page implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController
  ) {}

  month: string;

  ngOnInit() {
    this.month = this.route.snapshot.paramMap.get('month');
  }

  async showModalOne() {
    const modal = await this.modalCtrl.create({
      component: ModaloneComponent,
      cssClass: 'myModal'
    });

    modal.present();
  }
}
