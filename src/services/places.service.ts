import {Injectable} from "@angular/core";
import {Place} from "../assets/model/place.model";
import {Storage} from "@ionic/storage";



@Injectable()
export class PlacesService {
 pictures:Array<string>=[];
 keyWord:Array<string>=[];
  public places:Array<Place>=[
    {title:"A",photos:["a","b","c"],motsCles:"a"}, 
    {title:"a",photos:["a","b","c"],motsCles:"b"}, 
    {title:"C",photos:["a","b","c"],motsCles:"c"}];

  //injection du service à travers un constructeur
  constructor(public storage:Storage){

  }
    addPlace(place:Place){
      this.places.push(place);
      // rendre le stockage pérsistent ==> stocker dans la DB
      this.storage.set('places',this.places);
    }

    getAllPlaces(){
      return this.storage.get('places').then(data=>{
        this.places=data!=null?data:[];// places= data si data non vide , sinon , places= tableau vide
        return this.places;
      });

    }

  updateLocations(places:Array<Place>){
    this.places=places;
    this.storage.set('places',this.places);
    //this.saveLocations();

  }

  searchForLocation(motCle:string){
      let result: Array<Place>=[];
      this.places.forEach((c)=>{
       
        if(c.motsCles === motCle){
          console.log("motcle",motCle);
          console.log("p.motsCles valeur",c.motsCles);
          result.push(c);
          console.log("result inside if",result);
        }
        
      });

      console.log("motcle",motCle);
      console.log("result",result);
      
      return result;
      
  }

  /*addNewPhoto(photo:string,timestap:number){
    for(let i=0; i<this.places.length;i++){
      if(this.places[i].timeStamp==timestap){
        this.places[i].photos.push(photo);
        break;
      }
    }
    this.storage.set('places',this.places);
    console.log(this.places);
    console.log("contenu de this.places",this.places);
  }*/

  /*addNewPhoto(photo:string,timestap:number){
        this.pictures.push(photo);
    console.log("contenu de pictures",this.pictures);
    }*/

   
  getAllPictures(){
    return this.storage.get('places').then(data=>{
      this.places=data!=null?data:[];// places= data si data non vide , sinon , places= tableau vide
      return this.places;
    });

  }
}
