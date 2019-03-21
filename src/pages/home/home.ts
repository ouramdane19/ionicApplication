import { PlacesPage } from './../places/places';

import { DetailsPlacePage } from './../details-place/details-place';
import { Place } from './../../assets/model/place.model';
import {PlacesService} from "../../services/places.service";
import  *as Leaflet  from 'leaflet';
import { Component } from '@angular/core';
import { NavController, ViewController, App, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   map: any;
  latitude:any=0;
  longitude:any=0;
  public places:Array<Place>=[];
  params: Object;
  NavigPage: any;
  constructor(public navCtrl: NavController,
              public geolocation:Geolocation,
              public toastCtrl: ToastController,
              public placeService: PlacesService,
             public viewCtrl: ViewController,
             public appCtrl: App,
             public alertCtrl:AlertController) {

      geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
       this.latitude=pos.coords.latitude;
       this.longitude=pos.coords.longitude;
      }).catch((error) => {
        console.log("erreur de localisation !");
    });

  }
  // exécution à chaque affichage
  ionViewWillEnter(){
    this.placeService.getAllPlaces().then(data=>{
      this.places=data;
      console .log("cotenu de places dans places.ts",this.places);
    });
  }
  //fonction d'initialisation
  ngOnInit():void{
    this.drawMap();
    this.currentLocation();
  }
  // aller vers une autre page 
  pushPage(){
    this.navCtrl.push(DetailsPlacePage,{ place:this.places[1]});
  }
  pushPageSearch(){
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(PlacesPage);
  }
  //fonction affichage des autres places 
   placesDisplay(){
    var navCtrl = this.navCtrl;
    var places=this.places;
     var locations= this.places;
     for (var i = 0; i < this.places.length; i++) {
      var marker = new Leaflet.marker([this.places[i].location.latitude,this.places[i].location.longitude])
        .bindPopup(this.places[i].title)
        .addTo(this.map);//on('click',pushPage);//on('click',pushPage(this.places[i]));   
    } 
   /* marker[i].on('click',pushPage(locations[i]));
   function pushPage(e) {
    // console.log("e",place);
   
      alert(e.latlng); //ou  
      //alert(this.getLatLng());
      //navCtrl.push(DetailsPlacePage,{ place:places[e]});
     // navCtrl.push(DetailsPlacePage,{place:place});
      //this.navCtrl.push(DetailsPlacePage,{ place:locations[1]});
    } */  
   }
   //fonction Localisation 
   currentLocation() {
    var map = this.map;
    var toastCtrl2 = this.toastCtrl;
    //toast 
    const toast = toastCtrl2.create({
      message: 'Recherche de la position actuelle !',
      duration: 1000,
      position: 'bottom' ,
      closeButtonText: 'close'
    }); toast.present();
    console.log("recherche position");
    
    setTimeout(()=>{ 
      //recherche de la position
      map.locate({ setView: true}); 
    },1000);
    //évenement éechec localisation 
     map.on('locationerror',onLocationError);
    function onLocationError(){
      const toast = toastCtrl2.create({
        message: 'Echec localisation !!',
        duration: 1000,
        position: 'top' ,
        closeButtonText: 'close'
      }); toast.present();
      console.log("recherche position");
    }
    // localisation ok implique ajout marqueur et circle de proximité
    map.on('locationfound', onLocationFound);
    //when we have a location draw a marker and accuracy circle
    function onLocationFound(e) {
      var radius = e.accuracy / 2;
      Leaflet.marker(e.latlng).addTo(map).bindPopup("Vous êtes dans un rayon de "
      + radius + " mètres de ce point").openPopup();
       Leaflet.circle(e.latlng, radius).addTo(map);
    }
    
}

//ajpouter une map
drawMap(): void {
  //initialisation de la map (position france)
this.map =Leaflet.map('map',{
      center: [46.227638,2.213749000000007],
      zoom: 5,
      maxZoom: 18,
      minZoom:2  
    });
  
  Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'My app' ,
      zoom: 5,
      maxZoom: 18,
      minZoom:2 
  }).addTo(this.map);
  
}
  
}
