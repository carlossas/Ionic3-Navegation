import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//IMPORTACIONES
import { PrincipalPage, AjustesPage } from '../index.pages';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
