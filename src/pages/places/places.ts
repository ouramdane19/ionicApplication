import { SharePlacePage } from './../share-place/share-place';
import { EditPlacePage } from './../edit-place/edit-place';
import { EmailComposer } from '@ionic-native/email-composer';
import { PlacesService } from './../../services/places.service';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import {Place} from "../../assets/model/place.model";

import {NewPlacePage} from "../new-place/new-place";
import {DetailsPlacePage} from "../details-place/details-place";
import {AlertController, IonicPage, NavController,NavParams} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  places:Array<Place>=[];
  selectedPlaces:Array<Place>;
  motCle:string= null;
  items = [];

  result: Array<Place>=[];
  to:string;
  subject:string;
  body:string;
  //press:boolean;
  selected:boolean=false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public placeService: PlacesService,
              public storage:Storage,
              public alertCtrl:AlertController,
              private emailComposer: EmailComposer
              ) {
                for (let i = 0; i < 30; i++) {
                  this.items.push( this.items.length );
                }
  }

  // exécution à chaque affichage
  ionViewWillEnter(){
    this.placeService.getAllPlaces().then(data=>{
      this.places=data;
      console .log("cotenu de places dans places.ts",this.places);
    });
  }
  //actions une fois la page chargée ( il se fait une fois)
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  onNewPlace(){
    //le système ionic utilise une pile pour la navigation ; push()==> apparition de la page , pop() ==> suppression de la page
    this.navCtrl.push(NewPlacePage);
  }
  //locateDetails 
  onPlaceDetails(p:Place){
    console.log(p);
    this.navCtrl.push(DetailsPlacePage,{place:p});
  }


  // delete place 
  deletPlace(p){
    try {
      //alerte
      let alert=this.alertCtrl.create({
        title:"Confirmation",
        message:"Etes vous sûr de vouloir supprimer cette place ?",
        buttons:[
          {text:"Oui", handler:() =>{
            this.places.splice(this.places.indexOf(p),1);
            this.storage.set('places',this.places);
            this.navCtrl.pop();}},
          {text:"Annuler", handler:() =>{this.navCtrl.pop();}}
        ]
      });
      alert.present();
    } catch (error) {
      console.log("storage vide ", error);
      alert("storage vide!");
    } 
    }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    });
  }


  //envoyer les données par mail
  sharePlace(p:Place){
    let pictures=p.photos;
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     //fonction alert
    let alert=this.alertCtrl.create();
      alert.setTitle("Envoyer une place par email");
      alert.addInput({

        label:'user@example.com',
        name: 'to',
        placeholder: 'user@example.com'

      });

      alert.addInput({
        label:'Sujet',
        name: 'subject',
        placeholder: 'sujet',
        
      });

      alert.addInput({
        type:'textarea',
        label:'Message',
        name: 'body',
        placeholder: 'Message',
        
        
      });
      alert.addButton('Cancel');
      alert.addButton({
        text:"Envoyer",
         handler:data =>{
          let email = {
            to: data.to ,
            //attachments:pictures,//this.photos,
            subject: data.subject,
            body:data.body,
            isHtml: true
          };
         
           this.emailComposer.open(email);
         }});

  
  alert.present();


  }
    /**editplace function*/

  editPlace(p){
    this.navCtrl.push(EditPlacePage,{place:p});
  }
  

  
}



