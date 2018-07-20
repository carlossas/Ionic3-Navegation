import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre: string;
  edad: number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad")
    
    console.log(this.nombre, this.edad);
    

  }

  cerarrConParametros(){

    let data ={
      nombre: "Carlos",
      edad: 21,
      coords :{
        latitud: 10,
        longitud: -10
      }
    };

    this.viewCtrl.dismiss(data)

  }
  cerarrSinParametros(){
    this.viewCtrl.dismiss()
  }

  

}
