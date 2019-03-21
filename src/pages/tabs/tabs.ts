import { SearchPage } from './../search/search';
import { GalleryPage } from './../gallery/gallery';
import { MeteoPage } from './../meteo/meteo';
import { PlacesPage } from './../places/places';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
    tab1=HomePage;
    tab2=PlacesPage;
    tab3=MeteoPage;
    tab4=GalleryPage;
    tab5=SearchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
