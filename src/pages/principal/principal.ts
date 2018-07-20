import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Pagina2Page } from '../index.pages';


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  pagina2: any = Pagina2Page;

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }

  navegarPagina(){
    this.navCtrl.push( Pagina2Page )
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }

}
