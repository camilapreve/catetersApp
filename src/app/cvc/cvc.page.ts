import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PrevencaoPage } from './prevencao/prevencao.page';
import { IndicacaoPage } from './indicacao/indicacao.page';
import { ManipulacaoPage } from './manipulacao/manipulacao.page';
import { InsercaoPage } from './insercao/insercao.page';
import { NaoPage } from '../nao/nao.page';

@Component({
  selector: 'app-cvc',
  templateUrl: './cvc.page.html',
  styleUrls: ['./cvc.page.scss'],
})
export class CvcPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openPrevencaoModal(){
    const modal = await this.modalController.create({
      component: PrevencaoPage
    });
    console.log("aqui");
    return await modal.present();
  }

  async openIndicacaoModal(){
    const modal = await this.modalController.create({
      component: IndicacaoPage,
      cssClass: 'indicacaoClass'
    });
    return await modal.present();
  }

  async openNao(){
    const modal = await this.modalController.create({
      component: NaoPage,
      cssClass: 'naoClass'
    });
    return await modal.present();
  }

  async openInsercaoModal(){
    const modal = await this.modalController.create({
      component: InsercaoPage
    });
    return await modal.present();
  }

  async openManipulacaoModal(){
    const modal = await this.modalController.create({
      component: ManipulacaoPage
    });
    return await modal.present();
  }
}
