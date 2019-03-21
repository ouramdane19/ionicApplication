import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Place} from "../../assets/model/place.model";


@IonicPage()
@Component({
  selector: 'page-share-place',
  templateUrl: 'share-place.html',
})
export class SharePlacePage {
to ='';
cc='';
subject='';
body='';
place:Place;
photos:Array<string>;
attach:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer:EmailComposer) {
  
  //récupération des paramètres
  this.place=this.navParams.data.place;
  //récupération des photos
  this.photos= this.place.photos;
  this.attach=this.photos[0];
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePlacePage');
  }

onEmail(){

  this.emailComposer.isAvailable().then((available: boolean) =>{
    if(available) {
      //Now we know we can send
    }
   });
  
   let email = {
     to: this.to,
     cc: this.cc,
    // bcc: ['john@doe.com', 'jane@doe.com'],
     attachments:[],//this.photos,
     subject: this.subject,
     body: this.body,
     isHtml: true
   };
   
   // Send a text message using default options
   this.emailComposer.open(email);
   // Add app alias
   //this.emailComposer.addAlias('gmail', 'com.google.android.gm');
   // Specify app by name or alias
   //this.emailComposer.open({ app: 'gmail', subject: 'Sent from Gmail' });*/

}
 

}
