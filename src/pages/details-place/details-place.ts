import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { GalleryPage } from './../gallery/gallery';

import { DetailsPhotoPage } from './../details-photo/details-photo';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {Place} from "../../assets/model/place.model";
import {PlacesService} from "../../services/places.service";
import * as Leaflet from 'leaflet';/**
 * Generated class for the DetailsPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-place',
  templateUrl: 'details-place.html',
})
export class DetailsPlacePage {

  place:Place;
  pictures:Array<string>=[];
  listePhotos:Array<string>=[];
  map2: any;
  slides:any;
  rootPage:any = GalleryPage;
  location:any;
  adresse:any=[];
  constructor(public navCtrl: NavController,
              public placeService: PlacesService,
              public navParams: NavParams,
              public storage:Storage,
              public nativeGeocoder:NativeGeocoder) {

    this.place=this.navParams.data.place;
    console.log("pramètre place", this.place);
    //recupération des pramètres des places de la map
    this.location=this.navParams.data.location;
  }
  ionViewDidLoad() {
    //this.drawMap();
    console.log('ionViewDidLoad DetailsPlacePage');
    
  }

 ngOnInit():void{
    this.drawMap();
    this.monadresse();
      }

//ajpouter une map

drawMap(): void {
  this.map2 =Leaflet.map('map2',{
    center: [this.place.location.latitude, this.place.location.longitude],
    zoom: 13
  });
/*this.map= Leaflet.map('map').setView([this.place.location.latitude, this.place.location.longitude],13);*/
Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'My first Application',
    maxZoom: 18 }).addTo(this.map2);

Leaflet.marker([this.place.location.latitude, this.place.location.longitude]).addTo(this.map2)
.bindPopup('Place '+this.place.title).openPopup();
}
//recupérer l'indice du slide
slideChanged() {
  let currentIndex = this.slides.getActiveIndex();
  console.log('Current index is', currentIndex);
}

onPhotoDetails(pic:string){
  this.navCtrl.push(DetailsPhotoPage,{picture:pic});
}


monadresse(){
   
  let lat=this.place.location.latitude;
  let lng= this.place.location.longitude;
  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};

this.nativeGeocoder.reverseGeocode(lat,lng,options)
  .then((result: NativeGeocoderReverseResult[]) => (console.log(JSON.stringify(result[0])),this.adresse=result[0]))
  .catch((error: any) =>(console.log(error)));

  } 
 }




 

  

