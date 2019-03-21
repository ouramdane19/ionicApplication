import { Component } from '@angular/core';
import { PlacesService } from './../../services/places.service';
import { Storage } from '@ionic/storage';
import {Place} from "../../assets/model/place.model";
import {DetailsPlacePage} from "../details-place/details-place";
import {AlertController, IonicPage, NavController,NavParams} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchQuery:string= null;
  places:Array<Place>=[];
  motCle:string= null;
  items = [];
  result: Array<Place>=[];
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public placeService: PlacesService,
              public storage:Storage,
              public alertCtrl:AlertController
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

    this.result=[];
  }
  
  //locateDetails 
  onPlaceDetails(p:Place){
    console.log(p);
    this.navCtrl.push(DetailsPlacePage,{place:p});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  // search version ion Searchbar 

  onSearchLocation(){
    let keyword:string = this.searchQuery;
    let searchResult:Array<Place>=[];

    this.places.forEach((c)=>{
      let key1:string = c.motsCles; 
      let key2:string=c.title;
      let key3:string=c.country;
      let key4:string=c.city;
        //if(key1!= ""||key2!= ""||key3!= ""||key4!= ""){
        
              if(key1 === keyword || key2=== keyword ||key3=== keyword || key4=== keyword){
                      console.log(" égalité trouvée");
                      searchResult.push(c);
              }
            //}
      }); 
      this.result=searchResult;
// alert if the result is empty 
      if(this.result.length==0){
        let alert=this.alertCtrl.create({
          title:"oupsss!",
          message:"Aucune place ne correspond au mot clé  " +keyword+".",
        });
        alert.present();
      }
      console.log("result final",this.result);  
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
  
}