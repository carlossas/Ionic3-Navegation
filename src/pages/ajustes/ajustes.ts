import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../../pages/index.pages';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  activarPrincial(){
    this.navCtrl.parent.select(1)
  }

  mostar_modal(){
    let modal = this.modalCtrl.create( ModalPage, { nombre: "Carlos", edad: 21} );
    //MOSTRAR
    modal.present();
    //DETECTA CUANDO SE CIERRA EL MODAL
    modal.onDidDismiss( data=>{
      if (data){
        console.log("data del modal cuando se cierra",data);
      }else{
        console.log("se cerro sin parametros");
        
      }
      
    });
  }

}
