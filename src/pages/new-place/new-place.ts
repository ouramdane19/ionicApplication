import { Geolocation } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {Place} from "../../assets/model/place.model";
import {PlacesService} from "../../services/places.service";
import {Camera, CameraOptions} from "@ionic-native/camera";
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
  
})

export class NewPlacePage {
  
  place:Place;
  public photo:string;
  public motsCles:string;
  public country:string;
  //public keyWords:Array<string>=[];

  PhCompteur : number= 0;
  pictures:Array<string>=[];
  latitude:number=0;
  longitude:number=0;
  photos:Array<string>=[];
  adresse:any=[];
  

  constructor(public navCtrl: NavController,
              public placeService:PlacesService,
              public geolocation:Geolocation,
              private camera: Camera,
              public alertCtrl:AlertController,
            public nativeGeocoder:NativeGeocoder) {

                geolocation.getCurrentPosition().then(pos => {
                  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
                   this.latitude=pos.coords.latitude;
                   this.longitude=pos.coords.longitude;
                  }).catch((error) => {
                    console.log("erreur de localisation !");
                });
   
  }

  onAddPlace(place:Place){

    place.location={longitude:0,latitude:0,altitude:0}; //initialisation de location
    place.photos=[];
    place.timeStamp= new Date().getTime();
    place.location.longitude=this.longitude;
    place.location.latitude=this.latitude;
  
    /*place.photos=this.pictures;
    this.placeService.addPlace(place);
    this.navCtrl.pop();*/
      
      // une fenêtere d'alerte avec en utilisant AlertController
      if (this.PhCompteur== 0){
        let alert=this.alertCtrl.create({
          title:"Ajouter des photos",
          message:"voulez vous ajouter une photo ?",
          buttons:[
            {text:"Oui", handler:() =>{this.onTakePicture();}},
            {text:"Non", handler:() =>{this.placeService.addPlace(place);this.navCtrl.pop();}},
            {text:"Quitter", handler:() =>{this.navCtrl.pop();}}
  
  ]
        });
  
        alert.present();
      }else {
          place.photos=this.pictures;
          this.placeService.addPlace(place);
          this.navCtrl.pop();
      }
  
      }
        
  // capture photo
  onTakePicture(){
    const options1: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 400,
      targetHeight: 400,
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    };
    const options2: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 400,
      targetHeight: 400,
      quality: 100,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM 
    };
   

    // une fenêtere d'alerte avec en utilisant AlertController
    let alert=this.alertCtrl.create({
      title:"Source",
      subTitle:"Quelle Source ?",
      buttons:[
        {text:"Camera", handler:() =>{this.takePicture(options1);}},
        {text:"Library", handler:() =>{this.takePicture(options2);}},
               {text:"Cancel", handler:() =>{}}

      ]
    });

    alert.present();
  }

  takePicture(options){
    this.PhCompteur++;
    this.camera.getPicture(options)
    .then( imagemData => {
      let base64Image= this.photo = "data:image/jpeg;base64," + imagemData;
      this.pictures.push(this.photo);
      //this.place.photos=this.pictures;
  
      let alert=this.alertCtrl.create({
        title:"Source",
        message:"Une autre photo ?",
        buttons:[
          {text:"Oui", handler:() =>{this.onTakePicture();}},
          {text:"Non", handler:() =>{}}
        ]
      });
      alert.present();
  
    }, error => {
      console.log(error);
      })
      
    }

  //fonction NativeGeocode : addresse via coordonnées gps
 //NativeGeocoder function
 monadresse(){
   
  let lat=this.latitude;
  let lng= this.longitude;
  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 2
};

this.nativeGeocoder.reverseGeocode(lat,lng,options)
  .then((result: NativeGeocoderReverseResult[]) => (console.log(JSON.stringify(result[0])),this.adresse=result[0]))
  .catch((error: any) =>(console.log(error)));

  } 
 }


 
