import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-photo',
  templateUrl: 'details-photo.html',
})
export class DetailsPhotoPage {
  
 image:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image=this.navParams.data.picture;
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPhotoPage');
  }

  deletePicture(){
    
  }
}
