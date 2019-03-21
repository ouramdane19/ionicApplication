

import { Component } from '@angular/core';
import {FabContainer, IonicPage, LoadingController, NavController, NavParams, AlertController} from 'ionic-angular';

import {GalleryService} from "../../services/gallery.service";
import {DetailImagePage} from "../detail-image/detail-image";


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  motCle:string= null;
   size:number=20;
   currentPage:number=1;
   //images: Observable<any>;
    images:any={tab:[]};
   totalPages:number=1;
  
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              private galleryService:GalleryService,
              private loadingCtrl:LoadingController,
              public alertCtrl:AlertController) {

  }

ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    
  }
  onSearch(){
    //loading controller
    let loading=  this.loadingCtrl.create({
      content:"Chargement de la page ....."
    });
    loading.present();
    // en utilisant les services
    this.images=this.galleryService.chercher(this.motCle,this.size,this.currentPage);
    this.images.subscribe(data => {
            this.images=data;
            console.log('images: ', this.images);
            
    // alerte 
            if (data.totalHits==0){
              let alert=this.alertCtrl.create({
              title:"Oupsss",
              message:"Aucune photo trouvée chez pixabay!",
              });
              alert.present();}
           
           if(data.totalHits % this.size !=0 && data.totalHits<this.size ) {
             this.totalPages=1;
             console.log('total pages: ', this.totalPages);
           } else{
            this.totalPages=(data.totalHits)/this.size;
             console.log('totalhits: ', data.totalHits);
             console.log(' totalpages: ', this.totalPages);}

            /*data.hits.forEach(h=>{
              console.log('my data.hits: ', data.hits);
              console.log('my element h de hits: ', h);
              this.images.tab.push(h);
              console.log('Array.prototype.push.apply: ', this.images.hits);
            })*/
          }, err=>{
      console.log("il n y a plus de photos !");
      loading.dismiss();

    });
    setTimeout(() => {
      loading.dismiss();
    }, 10);


    //Sans utilisation de services ET public httpClient:HttpClient

    /*this.images = this.httpClient.get("https://pixabay.com/api/?key=9214076-1357212e3fa0c2004b4d5fdc2&q="+this.motCle+"&par_page=10&page=1");
    this.images.subscribe(data => {
      console.log('my data: ', data);
     this.images=data},err=>{console.log(err);
    });*/

  }

  doInfinite(infiniteScrole){
    if(this.currentPage<this.totalPages){
      ++this.currentPage;
      console.log(this.currentPage+'/'+this.totalPages);
      this.onSearch();
    }
    infiniteScrole.complete();
  }

  share(socialNet: string, fab: FabContainer) {
    fab.close();
    console.log("Sharing in", socialNet);
  }

  onDetailsImage(im) {
    this.navCtrl.push(DetailImagePage,{myImage:im});
  }



}

