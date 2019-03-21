import { CameraOptions } from '@ionic-native/camera';
import { Camera } from '@ionic-native/camera';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { PlacesService } from './../../services/places.service';
import { DetailsPhotoPage } from './../details-photo/details-photo';
//import { Place } from './../../../platforms/android/app/build/intermediates/assets/debug/www/assets/model/place.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { Place } from '../../assets/model/place.model';

@IonicPage()
@Component({
  selector: 'page-edit-place',
  templateUrl: 'edit-place.html',
})
export class EditPlacePage {
  place:Place;
  adresse:any=[];
  PhCompteur : number= 0;
  pictures:Array<string>=[];
  photos:Array<string>=[];
  public photo:string;
  //keywords:string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public placeService: PlacesService,
    public nativeGeocoder:NativeGeocoder,
    private camera: Camera,
    public alertCtrl:AlertController,
    public storage:Storage) {
    //
    this.place=this.navParams.data.place;
    console.log("pramètre place", this.place);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPlacePage');
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
    //this.pictures.push(this.photo);
    //this.place.photos=this.pictures;
    this.place.photos.push(this.photo);

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

  /**
   * update place
   */
  updatePlace(){
    this.storage.set('places',this.place);
    this.navCtrl.pop();
  }
 

  onPhotoDetails(pic:string){
    this.navCtrl.push(DetailsPhotoPage,{picture:pic});
  }
 

/** Recherche d'adresse */
  monadresse(){
   
    let lat=this.place.location.latitude;
    let lng= this.place.location.longitude;
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 2
  };
  
  this.nativeGeocoder.reverseGeocode(lat,lng,options)
    .then((result: NativeGeocoderReverseResult[]) => (console.log(JSON.stringify(result[0])),this.adresse=result[0]))
    .catch((error: any) =>(console.log(error)));
  
    } 
   }







