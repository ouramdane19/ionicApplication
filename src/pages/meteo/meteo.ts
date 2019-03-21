import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams,AlertController} from 'ionic-angular';
import {MeteoService} from "../../services/meteo.service";



@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  pageMeteo:any;
  searchQuery:string= null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private meteoService: MeteoService,
              private loadingCtrl:LoadingController,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }
  onGetMeteo(dataForm){
    let ville :string = this.searchQuery;
      // LoadingController
    let loading=  this.loadingCtrl.create({
      content:"Chargement de la page ....."
    });
    loading.present();
    // en utilisant les services
    this.pageMeteo=this.meteoService.chercher(ville);
    this.pageMeteo.subscribe(data => {
      this.pageMeteo=data;
      //alerte page not foun     
      console.log("Données Météo Alger!",this.pageMeteo);
    }, err=>{
      console.log("aucune donnée méteo !");
      let alert=this.alertCtrl.create({
        title:"Oupsss",
        message:"Aucune donnée méteo!",
        });
        alert.present();
    });
    setTimeout(() => {
      loading.dismiss();
    }, 10);

  }
}

