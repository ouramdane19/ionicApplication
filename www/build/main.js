webpackJsonp([11],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailImagePage = /** @class */ (function () {
    function DetailImagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.image = this.navParams.data.myImage;
    }
    DetailImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailImagePage');
    };
    DetailImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-image',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/detail-image/detail-image.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Détails de l\'image </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <ion-card>\n    <ion-card-header class="myCardHeader">\n      <ion-item >\n        <ion-avatar item-start>\n            <img src="{{image.userImageURL}}" >\n          </ion-avatar>\n          <h2>{{image.user}}</h2>\n        <p>{{image.user_id}}</p>\n       </ion-item>\n    </ion-card-header>\n    <img src="{{image.webformatURL}}">\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>{{image.likes}} Likes</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>{{image.comments}} Commentes </div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>{{image.favorites}} Favorites</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/detail-image/detail-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailImagePage);
    return DetailImagePage;
}());

//# sourceMappingURL=detail-image.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_geocoder__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_photo_details_photo__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Place } from './../../../platforms/android/app/build/intermediates/assets/debug/www/assets/model/place.model';



var EditPlacePage = /** @class */ (function () {
    //keywords:string;
    function EditPlacePage(navCtrl, navParams, placeService, nativeGeocoder, camera, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeService = placeService;
        this.nativeGeocoder = nativeGeocoder;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.adresse = [];
        this.PhCompteur = 0;
        this.pictures = [];
        this.photos = [];
        //
        this.place = this.navParams.data.place;
        console.log("pramètre place", this.place);
    }
    EditPlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPlacePage');
    };
    // capture photo
    EditPlacePage.prototype.onTakePicture = function () {
        var _this = this;
        var options1 = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 400,
            targetHeight: 400,
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        var options2 = {
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
        var alert = this.alertCtrl.create({
            title: "Source",
            subTitle: "Quelle Source ?",
            buttons: [
                { text: "Camera", handler: function () { _this.takePicture(options1); } },
                { text: "Library", handler: function () { _this.takePicture(options2); } },
                { text: "Cancel", handler: function () { } }
            ]
        });
        alert.present();
    };
    EditPlacePage.prototype.takePicture = function (options) {
        var _this = this;
        this.PhCompteur++;
        this.camera.getPicture(options)
            .then(function (imagemData) {
            var base64Image = _this.photo = "data:image/jpeg;base64," + imagemData;
            //this.pictures.push(this.photo);
            //this.place.photos=this.pictures;
            _this.place.photos.push(_this.photo);
            var alert = _this.alertCtrl.create({
                title: "Source",
                message: "Une autre photo ?",
                buttons: [
                    { text: "Oui", handler: function () { _this.onTakePicture(); } },
                    { text: "Non", handler: function () { } }
                ]
            });
            alert.present();
        }, function (error) {
            console.log(error);
        });
    };
    /**
     * update place
     */
    EditPlacePage.prototype.updatePlace = function () {
        this.storage.set('places', this.place);
        this.navCtrl.pop();
    };
    EditPlacePage.prototype.onPhotoDetails = function (pic) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_photo_details_photo__["a" /* DetailsPhotoPage */], { picture: pic });
    };
    /** Recherche d'adresse */
    EditPlacePage.prototype.monadresse = function () {
        var _this = this;
        var lat = this.place.location.latitude;
        var lng = this.place.location.longitude;
        var options = {
            useLocale: true,
            maxResults: 2
        };
        this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then(function (result) { return (console.log(JSON.stringify(result[0])), _this.adresse = result[0]); })
            .catch(function (error) { return (console.log(error)); });
    };
    EditPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-edit-place',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/edit-place/edit-place.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Edition de {{place.title}}</ion-title>\n    <ion-buttons end="">\n        <button ion-button="" icon-only="" (click)="monadresse()">\n          <ion-icon name="locate"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end="">\n          <button ion-button="" icon-only="" (click)="onTakePicture()">\n            <ion-icon name="camera"></ion-icon>\n          </button>\n        </ion-buttons>\n      <ion-buttons end="">\n          <button ion-button="" icon-only="" (click)="updatePlace()">\n            <ion-icon name="checkmark"></ion-icon>\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n<ion-content padding>\n\n    <div class="item-profile" text-center  [style.background-image]>\n        <ion-slides pager="true">\n           <ion-slide  *ngFor="let pic of place?.photos;" (click)="onPhotoDetails(pic)">\n               <img  [src]="pic" *ngIf="pic" alt="Photo " class="rounded-top">\n         </ion-slide>\n       </ion-slides> \n   </div>\n\n    <div>\n      <ion-label  color="secondary" stacked >Title</ion-label>\n        <ion-input  type="text" [(ngModel)]="place.title" name="title" placeholder="Title"  value="{{place.title}}"  ></ion-input>\n      <ion-label  stacked color="secondary">Country</ion-label>\n        <ion-input  type="text" [(ngModel)]="place.country" name="country" value="{{place.country}}"  ></ion-input>\n      <ion-label  stacked color="secondary">City</ion-label>\n        <ion-input type="text" [(ngModel)]="place.city" name="city" value="{{place.city}}"  ></ion-input>\n      <ion-label  stacked color="secondary">key Words</ion-label>\n        <ion-input   type="text" [(ngModel)]="place.motsCles"  name="motsCles" value="{{place.motsCles}}"  ></ion-input>\n     \n    </div> \n</ion-content>\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/edit-place/edit-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], EditPlacePage);
    return EditPlacePage;
}());

//# sourceMappingURL=edit-place.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_places_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewPlacePage = /** @class */ (function () {
    function NewPlacePage(navCtrl, placeService, geolocation, camera, alertCtrl, nativeGeocoder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.geolocation = geolocation;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.nativeGeocoder = nativeGeocoder;
        //public keyWords:Array<string>=[];
        this.PhCompteur = 0;
        this.pictures = [];
        this.latitude = 0;
        this.longitude = 0;
        this.photos = [];
        this.adresse = [];
        geolocation.getCurrentPosition().then(function (pos) {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            _this.latitude = pos.coords.latitude;
            _this.longitude = pos.coords.longitude;
        }).catch(function (error) {
            console.log("erreur de localisation !");
        });
    }
    NewPlacePage.prototype.onAddPlace = function (place) {
        var _this = this;
        place.location = { longitude: 0, latitude: 0, altitude: 0 }; //initialisation de location
        place.photos = [];
        place.timeStamp = new Date().getTime();
        place.location.longitude = this.longitude;
        place.location.latitude = this.latitude;
        /*place.photos=this.pictures;
        this.placeService.addPlace(place);
        this.navCtrl.pop();*/
        // une fenêtere d'alerte avec en utilisant AlertController
        if (this.PhCompteur == 0) {
            var alert_1 = this.alertCtrl.create({
                title: "Ajouter des photos",
                message: "voulez vous ajouter une photo ?",
                buttons: [
                    { text: "Oui", handler: function () { _this.onTakePicture(); } },
                    { text: "Non", handler: function () { _this.placeService.addPlace(place); _this.navCtrl.pop(); } },
                    { text: "Quitter", handler: function () { _this.navCtrl.pop(); } }
                ]
            });
            alert_1.present();
        }
        else {
            place.photos = this.pictures;
            this.placeService.addPlace(place);
            this.navCtrl.pop();
        }
    };
    // capture photo
    NewPlacePage.prototype.onTakePicture = function () {
        var _this = this;
        var options1 = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 400,
            targetHeight: 400,
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        var options2 = {
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
        var alert = this.alertCtrl.create({
            title: "Source",
            subTitle: "Quelle Source ?",
            buttons: [
                { text: "Camera", handler: function () { _this.takePicture(options1); } },
                { text: "Library", handler: function () { _this.takePicture(options2); } },
                { text: "Cancel", handler: function () { } }
            ]
        });
        alert.present();
    };
    NewPlacePage.prototype.takePicture = function (options) {
        var _this = this;
        this.PhCompteur++;
        this.camera.getPicture(options)
            .then(function (imagemData) {
            var base64Image = _this.photo = "data:image/jpeg;base64," + imagemData;
            _this.pictures.push(_this.photo);
            //this.place.photos=this.pictures;
            var alert = _this.alertCtrl.create({
                title: "Source",
                message: "Une autre photo ?",
                buttons: [
                    { text: "Oui", handler: function () { _this.onTakePicture(); } },
                    { text: "Non", handler: function () { } }
                ]
            });
            alert.present();
        }, function (error) {
            console.log(error);
        });
    };
    //fonction NativeGeocode : addresse via coordonnées gps
    //NativeGeocoder function
    NewPlacePage.prototype.monadresse = function () {
        var _this = this;
        var lat = this.latitude;
        var lng = this.longitude;
        var options = {
            useLocale: true,
            maxResults: 2
        };
        this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then(function (result) { return (console.log(JSON.stringify(result[0])), _this.adresse = result[0]); })
            .catch(function (error) { return (console.log(error)); });
    };
    NewPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-new-place',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/new-place/new-place.html"*/'\n<ion-header>\n    <ion-navbar color="dark">\n      <ion-title>New Places</ion-title>\n      <ion-buttons >\n      </ion-buttons>\n      <ion-buttons end="">\n        <button ion-button="" icon-only="" (click)="onTakePicture()">\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end="">\n     <button ion-button="" icon-only (click)="monadresse()" >\n      <ion-icon name="locate"></ion-icon>\n     </button> \n     </ion-buttons>\n     <ion-buttons end="">\n        <button ion-button="" icon-only="">\n          <ion-icon name="settings"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item  *ngFor="let im of pictures">\n           <img  [src]="im" *ngIf="im" >\n        </ion-item>\n    </ion-list>  \n\n    <!-- <button padding ion-button=""  block="" (click)="monadresse()">Adresse probable</button> \n        <div *ngIf="adresse==[]"  class="item-detail" padding>\n            <p>Country: <strong>{{adresse.countryName}}</strong></p>\n            <p>Région: <strong>{{adresse.administrativeArea}}</strong></p> \n            <p>Département: <strong>{{adresse.subAdministrativeArea}}</strong></p>  \n            <p>City: <strong>{{adresse.locality}}</strong></p>\n            <p>Code Postale: <strong>{{adresse.postalCode}}</strong></p> \n            <p>rue: <strong>{{adresse.thoroughfare}}</strong></p>\n        </div> -->\n\n  <form   #f="ngForm" (ngSubmit)="onAddPlace(f.value)">\n      <div class="form-group ">\n        <ion-label for="title" color="secondary"stacked >Title</ion-label>\n          <ion-input id ="title" type="text" name="title" ngModel placeholder="Title" clearInput class="form-control" required value="{{adresse.locality}}"  ></ion-input>\n        </div> \n        <div class="form-group">\n          <ion-label for="country" stacked color="secondary">Country</ion-label>\n          <ion-input id ="country" type="text" name="country" class="form-control" ngModel class="form-control" placeholder=" country" value="{{adresse.countryName}}" clearInput ></ion-input>\n        </div> \n        <div class="form-group">\n          <ion-label for="city" stacked color="secondary">City</ion-label>\n          <ion-input id ="city"type="text" name="city" ngModel  class="form-control" placeholder="city" value="{{adresse.locality}}" clearInput ></ion-input>\n        </div> \n        <div class="form-group">\n          <ion-label for="motsCles" stacked color="secondary">key Words</ion-label>\n          <ion-input id="motsCles"  type="text" ngModel  name="motsCles" class="form-control"  placeholder="{{adresse.countryName}} {{adresse.locality}}" value="{{adresse.countryName}} {{adresse.locality}} " clearInput ></ion-input>\n        </div> \n      \n      <button ion-button="" type="submit" block=""  >save place</button> \n    </form>\n</ion-content>\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/new-place/new-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], NewPlacePage);
    return NewPlacePage;
}());

//# sourceMappingURL=new-place.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_places_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_place_details_place__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, placeService, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeService = placeService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.searchQuery = null;
        this.places = [];
        this.motCle = null;
        this.items = [];
        this.result = [];
        for (var i = 0; i < 30; i++) {
            this.items.push(this.items.length);
        }
    }
    // exécution à chaque affichage
    SearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.placeService.getAllPlaces().then(function (data) {
            _this.places = data;
            console.log("cotenu de places dans places.ts", _this.places);
        });
        this.result = [];
    };
    //locateDetails 
    SearchPage.prototype.onPlaceDetails = function (p) {
        console.log(p);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_place_details_place__["a" /* DetailsPlacePage */], { place: p });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    // search version ion Searchbar 
    SearchPage.prototype.onSearchLocation = function () {
        var keyword = this.searchQuery;
        var searchResult = [];
        this.places.forEach(function (c) {
            var key1 = c.motsCles;
            var key2 = c.title;
            var key3 = c.country;
            var key4 = c.city;
            //if(key1!= ""||key2!= ""||key3!= ""||key4!= ""){
            if (key1 === keyword || key2 === keyword || key3 === keyword || key4 === keyword) {
                console.log(" égalité trouvée");
                searchResult.push(c);
            }
            //}
        });
        this.result = searchResult;
        // alert if the result is empty 
        if (this.result.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: "oupsss!",
                message: "Aucune place ne correspond au mot clé  " + keyword + ".",
            });
            alert_1.present();
        }
        console.log("result final", this.result);
    };
    // delete place 
    SearchPage.prototype.deletPlace = function (p) {
        var _this = this;
        try {
            //alerte
            var alert_2 = this.alertCtrl.create({
                title: "Confirmation",
                message: "Etes vous sûr de vouloir supprimer cette place ?",
                buttons: [
                    { text: "Oui", handler: function () {
                            _this.places.splice(_this.places.indexOf(p), 1);
                            _this.storage.set('places', _this.places);
                            _this.navCtrl.pop();
                        } },
                    { text: "Annuler", handler: function () { _this.navCtrl.pop(); } }
                ]
            });
            alert_2.present();
        }
        catch (error) {
            console.log("storage vide ", error);
        }
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 5; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Search</ion-title>\n    <button ion-button="" menuToggle="">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchQuery" (change)="onSearchLocation()" autocorrect="off" placeholder="Entrer le nom d\'une place " ></ion-searchbar>\n  <ion-list *ngFor="let p of result" (click)="onPlaceDetails(p)">\n      <ion-item-sliding  #item >\n          <ion-item  >\n         <ion-avatar item-start >\n             <img *ngIf="!p.photos==[]" [src]="p.photos[0]" alt="Photo d\'une place" > \n         </ion-avatar>\n           <h2>{{p.title}}</h2>\n           <p> {{p.city}} {{p.country}} </p>\n         </ion-item>\n         <ion-item-options side="left">\n             <button item-end ion-button color="danger" expandable (click)="deletPlace(p)">\n                 <ion-icon name="trash"></ion-icon>\n                 Delete\n             </button> \n         </ion-item-options>\n         <ion-item-options side="right">\n             <button item-end ion-button color="light" expandable (click)="onPlaceDetails(p)">\n                 <ion-icon name="information-circle"></ion-icon>\n              details\n             </button>\n           <button item-end ion-button color="secondary" expandable (click)="editPlace(p)">\n                 <ion-icon name="create"></ion-icon>\n                edit\n               </button> \n               <button item-end ion-button color="primary" expandable (click)="sharePlace(p)">\n                   <ion-icon name="send"></ion-icon>\n                   share\n                 </button> \n           </ion-item-options>\n       </ion-item-sliding> \n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)=" doInfinite($event) ">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_search__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_gallery__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meteo_meteo__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__places_places__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__places_places__["a" /* PlacesPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__meteo_meteo__["a" /* MeteoPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_1__gallery_gallery__["a" /* GalleryPage */];
        this.tab5 = __WEBPACK_IMPORTED_MODULE_0__search_search__["a" /* SearchPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/tabs/tabs.html"*/'\n\n<ion-tabs color="dark" selectedIndex="0">\n        <ion-tab tabIcon="home" tabTitle="Home" [root]="tab1"></ion-tab>\n        <ion-tab tabIcon="locate" tabTitle="Mes places" [root]="tab2"></ion-tab>\n        <ion-tab tabIcon="cloudy-night" tabTitle="Méteo" [root]="tab3"></ion-tab>\n        <ion-tab tabIcon="images" tabTitle="Photos " [root]="tab4"></ion-tab>\n        <ion-tab tabIcon="search" tabTitle="Place" [root]="tab5"></ion-tab>\n       \n</ion-tabs>\n\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-image/detail-image.module": [
		299,
		10
	],
	"../pages/details-photo/details-photo.module": [
		300,
		9
	],
	"../pages/details-place/details-place.module": [
		301,
		8
	],
	"../pages/edit-place/edit-place.module": [
		302,
		7
	],
	"../pages/gallery/gallery.module": [
		303,
		6
	],
	"../pages/meteo/meteo.module": [
		304,
		5
	],
	"../pages/new-place/new-place.module": [
		305,
		4
	],
	"../pages/places/places.module": [
		306,
		3
	],
	"../pages/search/search.module": [
		307,
		2
	],
	"../pages/share-place/share-place.module": [
		308,
		1
	],
	"../pages/tabs/tabs.module": [
		309,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryService = /** @class */ (function () {
    function GalleryService(http) {
        this.http = http;
        this.host = "https://pixabay.com/api/";
        this.key = "";
    }
    GalleryService.prototype.chercher = function (query, size, page) {
        return this.http.get(this.host + "?key=" + this.key + "&q=" + query + "&par_page=" + size + "&page=" + page);
    };
    GalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GalleryService);
    return GalleryService;
}());

//# sourceMappingURL=gallery.service.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeteoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeteoService = /** @class */ (function () {
    function MeteoService(http) {
        this.http = http;
        this.host = "http://api.openweathermap.org/data/2.5/forecast";
        this.key = "";
    }
    MeteoService.prototype.chercher = function (query) {
        //return this.http.get(this.host+"?q="+query+"&APPID="+this.key);
        return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + query + "&APPID=" + this.key);
    };
    MeteoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MeteoService);
    return MeteoService;
}());

//# sourceMappingURL=meteo.service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__places_places__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_place_details_place__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geolocation, toastCtrl, placeService, viewCtrl, appCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.placeService = placeService;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.latitude = 0;
        this.longitude = 0;
        this.places = [];
        geolocation.getCurrentPosition().then(function (pos) {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            _this.latitude = pos.coords.latitude;
            _this.longitude = pos.coords.longitude;
        }).catch(function (error) {
            console.log("erreur de localisation !");
        });
    }
    // exécution à chaque affichage
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.placeService.getAllPlaces().then(function (data) {
            _this.places = data;
            console.log("cotenu de places dans places.ts", _this.places);
        });
    };
    //fonction d'initialisation
    HomePage.prototype.ngOnInit = function () {
        this.drawMap();
        this.currentLocation();
    };
    // aller vers une autre page 
    HomePage.prototype.pushPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__details_place_details_place__["a" /* DetailsPlacePage */], { place: this.places[1] });
    };
    HomePage.prototype.pushPageSearch = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_0__places_places__["a" /* PlacesPage */]);
    };
    //fonction affichage des autres places 
    HomePage.prototype.placesDisplay = function () {
        var navCtrl = this.navCtrl;
        var places = this.places;
        var locations = this.places;
        for (var i = 0; i < this.places.length; i++) {
            var marker = new __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"]([this.places[i].location.latitude, this.places[i].location.longitude])
                .bindPopup(this.places[i].title)
                .addTo(this.map); //on('click',pushPage);//on('click',pushPage(this.places[i]));   
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
    };
    //fonction Localisation 
    HomePage.prototype.currentLocation = function () {
        var map = this.map;
        var toastCtrl2 = this.toastCtrl;
        //toast 
        var toast = toastCtrl2.create({
            message: 'Recherche de la position actuelle !',
            duration: 1000,
            position: 'bottom',
            closeButtonText: 'close'
        });
        toast.present();
        console.log("recherche position");
        setTimeout(function () {
            //recherche de la position
            map.locate({ setView: true });
        }, 1000);
        //évenement éechec localisation 
        map.on('locationerror', onLocationError);
        function onLocationError() {
            var toast = toastCtrl2.create({
                message: 'Echec localisation !!',
                duration: 1000,
                position: 'top',
                closeButtonText: 'close'
            });
            toast.present();
            console.log("recherche position");
        }
        // localisation ok implique ajout marqueur et circle de proximité
        map.on('locationfound', onLocationFound);
        //when we have a location draw a marker and accuracy circle
        function onLocationFound(e) {
            var radius = e.accuracy / 2;
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"](e.latlng).addTo(map).bindPopup("Vous êtes dans un rayon de "
                + radius + " mètres de ce point").openPopup();
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["circle"](e.latlng, radius).addTo(map);
        }
    };
    //ajpouter une map
    HomePage.prototype.drawMap = function () {
        //initialisation de la map (position france)
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet__["map"]('map', {
            center: [46.227638, 2.213749000000007],
            zoom: 5,
            maxZoom: 18,
            minZoom: 2
        });
        __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'My app',
            zoom: 5,
            maxZoom: 18,
            minZoom: 2
        }).addTo(this.map);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <ion-title>Accueil</ion-title>\n      <button ion-button="" menuToggle="">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-buttons end="">\n          <button ion-button="" icon-only="">\n            <ion-icon name="settings"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n   </ion-header>\n<ion-content class="stylePage" >  \n  <div class="container" id="map" padding >\n      <ion-buttons class="leaflet-bottom leaflet-top leaflet-right" end="" >\n          <button   ion-button icon-only=""  (click)="currentLocation()" color="light"  >\n              <ion-icon name="locate"></ion-icon>\n            </button>\n            <button ion-button icon-only="" (click)="placesDisplay()" color="light">\n                <ion-icon ios="ios-pin" md="md-pin" ></ion-icon>\n            </button>\n      </ion-buttons> \n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_email_composer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharePlacePage = /** @class */ (function () {
    function SharePlacePage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.to = '';
        this.cc = '';
        this.subject = '';
        this.body = '';
        //récupération des paramètres
        this.place = this.navParams.data.place;
        //récupération des photos
        this.photos = this.place.photos;
        this.attach = this.photos[0];
    }
    SharePlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharePlacePage');
    };
    SharePlacePage.prototype.onEmail = function () {
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        var email = {
            to: this.to,
            cc: this.cc,
            // bcc: ['john@doe.com', 'jane@doe.com'],
            attachments: [],
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
    };
    SharePlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-share-place',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/share-place/share-place.html"*/'\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>sharePlace</ion-title>\n    <ion-buttons end="">\n     <button ion-button="" icon-only (click)="onEmail()" >\n      <ion-icon name="send"></ion-icon>\n     </button> \n     </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n        <div padding>\n          <ion-label  color="secondary" stacked >to</ion-label>\n            <ion-input  type="text" name="to" [(ngModel)]="to" placeholder="to" clearInput ></ion-input>\n          <ion-label  stacked color="secondary">cc</ion-label>\n            <ion-input type="text" name="cc" [(ngModel)]="cc"  placeholder="cc"  clearInput ></ion-input>\n          <ion-label  stacked color="secondary">subject</ion-label>\n            <ion-input type="text" name="subject" [(ngModel)]="subject"   placeholder="subject"  clearInput ></ion-input>\n          <ion-label  stacked color="secondary">Text</ion-label>\n            <ion-textarea   name="body"  [(ngModel)]="body" clearInput ></ion-textarea>\n       <ion-label  stacked color="secondary">Attachements</ion-label>\n      <!-- <ion-input type="text" name="attach" [(ngModel)]="attach"   placeholder="Attachements"  clearInput ></ion-input> -->\n              <ion-slides padding pager="true">\n                  <ion-slide  *ngFor="let item of place.photos" >\n                      <img [src]="item" alt="photos">\n                </ion-slide>\n              </ion-slides> \n        </div>    \n</ion-content>\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/share-place/share-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], SharePlacePage);
    return SharePlacePage;
}());

//# sourceMappingURL=share-place.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_share_place_share_place__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_edit_place_edit_place__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_search_search__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_photo_details_photo__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_meteo_meteo__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_gallery_gallery__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_places_places__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_api_api__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_gallery_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_detail_image_detail_image__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_meteo_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_places_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_new_place_new_place__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_details_place_details_place__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_long_press__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_native_geocoder__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_2__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_1__pages_edit_place_edit_place__["a" /* EditPlacePage */], __WEBPACK_IMPORTED_MODULE_0__pages_share_place_share_place__["a" /* SharePlacePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_13__pages_gallery_gallery__["a" /* GalleryPage */], __WEBPACK_IMPORTED_MODULE_12__pages_meteo_meteo__["a" /* MeteoPage */], __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_14__pages_places_places__["a" /* PlacesPage */], __WEBPACK_IMPORTED_MODULE_18__pages_detail_image_detail_image__["a" /* DetailImagePage */], __WEBPACK_IMPORTED_MODULE_21__pages_new_place_new_place__["a" /* NewPlacePage */], __WEBPACK_IMPORTED_MODULE_24__pages_details_place_details_place__["a" /* DetailsPlacePage */], __WEBPACK_IMPORTED_MODULE_4__pages_details_photo_details_photo__["a" /* DetailsPhotoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_27_ionic_long_press__["a" /* LongPressModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-image/detail-image.module#DetailImagePageModule', name: 'DetailImagePage', segment: 'detail-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-photo/details-photo.module#DetailsPhotoPageModule', name: 'DetailsPhotoPage', segment: 'details-photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-place/details-place.module#DetailsPlacePageModule', name: 'DetailsPlacePage', segment: 'details-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-place/edit-place.module#EditPlacePageModule', name: 'EditPlacePage', segment: 'edit-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meteo/meteo.module#MeteoPageModule', name: 'MeteoPage', segment: 'meteo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-place/new-place.module#NewPlacePageModule', name: 'NewPlacePage', segment: 'new-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/share-place/share-place.module#SharePlacePageModule', name: 'SharePlacePage', segment: 'share-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__PlacesData',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_2__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_1__pages_edit_place_edit_place__["a" /* EditPlacePage */], __WEBPACK_IMPORTED_MODULE_0__pages_share_place_share_place__["a" /* SharePlacePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_13__pages_gallery_gallery__["a" /* GalleryPage */], __WEBPACK_IMPORTED_MODULE_12__pages_meteo_meteo__["a" /* MeteoPage */], __WEBPACK_IMPORTED_MODULE_14__pages_places_places__["a" /* PlacesPage */], __WEBPACK_IMPORTED_MODULE_18__pages_detail_image_detail_image__["a" /* DetailImagePage */], __WEBPACK_IMPORTED_MODULE_21__pages_new_place_new_place__["a" /* NewPlacePage */], __WEBPACK_IMPORTED_MODULE_4__pages_details_photo_details_photo__["a" /* DetailsPhotoPage */], __WEBPACK_IMPORTED_MODULE_24__pages_details_place_details_place__["a" /* DetailsPlacePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_17__services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_19__services_meteo_service__["a" /* MeteoService */], __WEBPACK_IMPORTED_MODULE_20__services_places_service__["a" /* PlacesService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_28__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlacesService = /** @class */ (function () {
    //injection du service à travers un constructeur
    function PlacesService(storage) {
        this.storage = storage;
        this.pictures = [];
        this.keyWord = [];
        this.places = [
            { title: "A", photos: ["a", "b", "c"], motsCles: "a" },
            { title: "a", photos: ["a", "b", "c"], motsCles: "b" },
            { title: "C", photos: ["a", "b", "c"], motsCles: "c" }
        ];
    }
    PlacesService.prototype.addPlace = function (place) {
        this.places.push(place);
        // rendre le stockage pérsistent ==> stocker dans la DB
        this.storage.set('places', this.places);
    };
    PlacesService.prototype.getAllPlaces = function () {
        var _this = this;
        return this.storage.get('places').then(function (data) {
            _this.places = data != null ? data : []; // places= data si data non vide , sinon , places= tableau vide
            return _this.places;
        });
    };
    PlacesService.prototype.updateLocations = function (places) {
        this.places = places;
        this.storage.set('places', this.places);
        //this.saveLocations();
    };
    PlacesService.prototype.searchForLocation = function (motCle) {
        var result = [];
        this.places.forEach(function (c) {
            if (c.motsCles === motCle) {
                console.log("motcle", motCle);
                console.log("p.motsCles valeur", c.motsCles);
                result.push(c);
                console.log("result inside if", result);
            }
        });
        console.log("motcle", motCle);
        console.log("result", result);
        return result;
    };
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
    PlacesService.prototype.getAllPictures = function () {
        var _this = this;
        return this.storage.get('places').then(function (data) {
            _this.places = data != null ? data : []; // places= data si data non vide , sinon , places= tableau vide
            return _this.places;
        });
    };
    PlacesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], PlacesService);
    return PlacesService;
}());

//# sourceMappingURL=places.service.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gallery_gallery__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_meteo_meteo__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_places_places__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
        this.items = [
            { title: 'MY GALLERY', component: __WEBPACK_IMPORTED_MODULE_5__pages_gallery_gallery__["a" /* GalleryPage */] },
            { title: 'MY METEO', component: __WEBPACK_IMPORTED_MODULE_6__pages_meteo_meteo__["a" /* MeteoPage */] },
            { title: 'MY PLACES', component: __WEBPACK_IMPORTED_MODULE_7__pages_places_places__["a" /* PlacesPage */] },
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.itemSelected = function (item) {
        this.rootPage = item.component;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content >\n      <ion-list id=listeMenu >\n        <button menuClose="" ion-item="" *ngFor="let item of items" (click)="itemSelected(item)">{{item.title}}</button>\n      </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.getImages = function () {
        return this.http.get('https://pixabay.com/api/?key=&q=alger&par_page=10&page=1');
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_gallery__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_photo_details_photo__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_places_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_leaflet__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







 /**
 * Generated class for the DetailsPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPlacePage = /** @class */ (function () {
    function DetailsPlacePage(navCtrl, placeService, navParams, storage, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.placeService = placeService;
        this.navParams = navParams;
        this.storage = storage;
        this.nativeGeocoder = nativeGeocoder;
        this.pictures = [];
        this.listePhotos = [];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__gallery_gallery__["a" /* GalleryPage */];
        this.adresse = [];
        this.place = this.navParams.data.place;
        console.log("pramètre place", this.place);
        //recupération des pramètres des places de la map
        this.location = this.navParams.data.location;
    }
    DetailsPlacePage.prototype.ionViewDidLoad = function () {
        //this.drawMap();
        console.log('ionViewDidLoad DetailsPlacePage');
    };
    DetailsPlacePage.prototype.ngOnInit = function () {
        this.drawMap();
        this.monadresse();
    };
    //ajpouter une map
    DetailsPlacePage.prototype.drawMap = function () {
        this.map2 = __WEBPACK_IMPORTED_MODULE_7_leaflet__["map"]('map2', {
            center: [this.place.location.latitude, this.place.location.longitude],
            zoom: 13
        });
        /*this.map= Leaflet.map('map').setView([this.place.location.latitude, this.place.location.longitude],13);*/
        __WEBPACK_IMPORTED_MODULE_7_leaflet__["tileLayer"]('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'My first Application',
            maxZoom: 18
        }).addTo(this.map2);
        __WEBPACK_IMPORTED_MODULE_7_leaflet__["marker"]([this.place.location.latitude, this.place.location.longitude]).addTo(this.map2)
            .bindPopup('Place ' + this.place.title).openPopup();
    };
    //recupérer l'indice du slide
    DetailsPlacePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    DetailsPlacePage.prototype.onPhotoDetails = function (pic) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_photo_details_photo__["a" /* DetailsPhotoPage */], { picture: pic });
    };
    DetailsPlacePage.prototype.monadresse = function () {
        var _this = this;
        var lat = this.place.location.latitude;
        var lng = this.place.location.longitude;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then(function (result) { return (console.log(JSON.stringify(result[0])), _this.adresse = result[0]); })
            .catch(function (error) { return (console.log(error)); });
    };
    DetailsPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-details-place',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/details-place/details-place.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>{{place.title}}</ion-title>\n    <button end="" ion-button="" menuToggle="">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n    <div class="item-profile" text-center  [style.background-image] >\n         <ion-slides padding pager="true" autoplay="800" effect="fade" loop="true" >\n            <ion-slide  *ngFor="let pic of place.photos;" (click)="onPhotoDetails(pic)" (ionSlideDidChange)="slideChanged()">\n                <img  [src]="pic" *ngIf="pic" alt="Photo " class="rounded-top">\n          </ion-slide>\n        </ion-slides> \n    </div>\n        <div class="container-fluid" text-center> \n          <h3 color="light">Adresse</h3>\n            <p>Title: <strong>{{place.title}}</strong></p>\n            <p>Country: <strong>{{adresse.countryName}}</strong></p>\n            <p>Région: <strong>{{adresse.administrativeArea}}</strong></p> \n            <p>Département: <strong>{{adresse.subAdministrativeArea}}</strong></p>  \n            <p>City: <strong>{{adresse.locality}}</strong></p>\n            <p>Code Postale: <strong>{{adresse.postalCode}}</strong></p> \n            <p>Rue: <strong>{{adresse.thoroughfare}}</strong></p>\n            <p>Date de création: <strong>{{place.timeStamp|date:\'dd/MM/yyyy-HH:mm\'}}</strong></p> \n        </div> \n        <div class="container-fluid" id="map2" padding ></div>  \n</ion-content>\n\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/details-place/details-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], DetailsPlacePage);
    return DetailsPlacePage;
}());

//# sourceMappingURL=details-place.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_image_detail_image__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, navParams, galleryService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.galleryService = galleryService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.motCle = null;
        this.size = 20;
        this.currentPage = 1;
        //images: Observable<any>;
        this.images = { tab: [] };
        this.totalPages = 1;
    }
    GalleryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleryPage');
    };
    GalleryPage.prototype.onSearch = function () {
        var _this = this;
        //loading controller
        var loading = this.loadingCtrl.create({
            content: "Chargement de la page ....."
        });
        loading.present();
        // en utilisant les services
        this.images = this.galleryService.chercher(this.motCle, this.size, this.currentPage);
        this.images.subscribe(function (data) {
            _this.images = data;
            console.log('images: ', _this.images);
            // alerte 
            if (data.totalHits == 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: "Oupsss",
                    message: "Aucune photo trouvée chez pixabay!",
                });
                alert_1.present();
            }
            if (data.totalHits % _this.size != 0 && data.totalHits < _this.size) {
                _this.totalPages = 1;
                console.log('total pages: ', _this.totalPages);
            }
            else {
                _this.totalPages = (data.totalHits) / _this.size;
                console.log('totalhits: ', data.totalHits);
                console.log(' totalpages: ', _this.totalPages);
            }
            /*data.hits.forEach(h=>{
              console.log('my data.hits: ', data.hits);
              console.log('my element h de hits: ', h);
              this.images.tab.push(h);
              console.log('Array.prototype.push.apply: ', this.images.hits);
            })*/
        }, function (err) {
            console.log("il n y a plus de photos !");
            loading.dismiss();
        });
        setTimeout(function () {
            loading.dismiss();
        }, 10);
        //Sans utilisation de services ET public httpClient:HttpClient
        /*this.images = this.httpClient.get("https://pixabay.com/api/?key=9214076-1357212e3fa0c2004b4d5fdc2&q="+this.motCle+"&par_page=10&page=1");
        this.images.subscribe(data => {
          console.log('my data: ', data);
         this.images=data},err=>{console.log(err);
        });*/
    };
    GalleryPage.prototype.doInfinite = function (infiniteScrole) {
        if (this.currentPage < this.totalPages) {
            ++this.currentPage;
            console.log(this.currentPage + '/' + this.totalPages);
            this.onSearch();
        }
        infiniteScrole.complete();
    };
    GalleryPage.prototype.share = function (socialNet, fab) {
        fab.close();
        console.log("Sharing in", socialNet);
    };
    GalleryPage.prototype.onDetailsImage = function (im) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_image_detail_image__["a" /* DetailImagePage */], { myImage: im });
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/gallery/gallery.html"*/'\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>My Gallery</ion-title>\n    <button ion-button="" menuToggle="">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content padding="">\n    <ion-searchbar [(ngModel)]="motCle" (change)="onSearch()" autocorrect="off" \n    placeholder="Chercher des photos dans pixaby" ></ion-searchbar>\n    <ion-buttons>\n        <button *ngIf="motCle" ion-button icon-start clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>{{currentPage+"/"+totalPages}} Pages </div>\n          </button>\n          <button  *ngIf="motCle" ion-button icon-start clear small>\n            <ion-icon name="basket"></ion-icon>\n            <div>{{images.totalHits}} photos </div>\n          </button>\n    </ion-buttons>\n    \n  <ion-card *ngFor="let im of images?.hits" >\n    <ion-card-header class="myCardHeader">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{im.userImageURL}}">\n        </ion-avatar>\n        <h2>{{im.user}}</h2>\n        <p>{{im.user_id}}</p> \n      </ion-item>\n    </ion-card-header>\n    <img src="{{im.previewURL}}" (click)="onDetailsImage(im)">\n    <ion-card-content>\n      <p>Height: <strong>{{im.imageHeight}}</strong></p>\n      <p>widht: <strong>{{im.imageWidth}}</strong></p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{im.likes}} Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{im.comments}} Commentes </div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{im.favorites}} Favorites</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/gallery/gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_place_edit_place__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_places_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_place_new_place__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_place_details_place__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PlacesPage = /** @class */ (function () {
    function PlacesPage(navCtrl, navParams, placeService, storage, alertCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeService = placeService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.places = [];
        this.motCle = null;
        this.items = [];
        this.result = [];
        //press:boolean;
        this.selected = false;
        for (var i = 0; i < 30; i++) {
            this.items.push(this.items.length);
        }
    }
    // exécution à chaque affichage
    PlacesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.placeService.getAllPlaces().then(function (data) {
            _this.places = data;
            console.log("cotenu de places dans places.ts", _this.places);
        });
    };
    //actions une fois la page chargée ( il se fait une fois)
    PlacesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacesPage');
    };
    PlacesPage.prototype.onNewPlace = function () {
        //le système ionic utilise une pile pour la navigation ; push()==> apparition de la page , pop() ==> suppression de la page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__new_place_new_place__["a" /* NewPlacePage */]);
    };
    //locateDetails 
    PlacesPage.prototype.onPlaceDetails = function (p) {
        console.log(p);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__details_place_details_place__["a" /* DetailsPlacePage */], { place: p });
    };
    // delete place 
    PlacesPage.prototype.deletPlace = function (p) {
        var _this = this;
        try {
            //alerte
            var alert_1 = this.alertCtrl.create({
                title: "Confirmation",
                message: "Etes vous sûr de vouloir supprimer cette place ?",
                buttons: [
                    { text: "Oui", handler: function () {
                            _this.places.splice(_this.places.indexOf(p), 1);
                            _this.storage.set('places', _this.places);
                            _this.navCtrl.pop();
                        } },
                    { text: "Annuler", handler: function () { _this.navCtrl.pop(); } }
                ]
            });
            alert_1.present();
        }
        catch (error) {
            console.log("storage vide ", error);
            alert("storage vide!");
        }
    };
    PlacesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 5; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        });
    };
    //envoyer les données par mail
    PlacesPage.prototype.sharePlace = function (p) {
        var _this = this;
        var pictures = p.photos;
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        //fonction alert
        var alert = this.alertCtrl.create();
        alert.setTitle("Envoyer une place par email");
        alert.addInput({
            label: 'user@example.com',
            name: 'to',
            placeholder: 'user@example.com'
        });
        alert.addInput({
            label: 'Sujet',
            name: 'subject',
            placeholder: 'sujet',
        });
        alert.addInput({
            type: 'textarea',
            label: 'Message',
            name: 'body',
            placeholder: 'Message',
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: "Envoyer",
            handler: function (data) {
                var email = {
                    to: data.to,
                    //attachments:pictures,//this.photos,
                    subject: data.subject,
                    body: data.body,
                    isHtml: true
                };
                _this.emailComposer.open(email);
            }
        });
        alert.present();
    };
    /**editplace function*/
    PlacesPage.prototype.editPlace = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_place_edit_place__["a" /* EditPlacePage */], { place: p });
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/places/places.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>places</ion-title>\n    <button start="" ion-button="" menuToggle="">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-buttons end="">\n      <button ion-button="" icon-only="" (click)="onNewPlace()"  >\n        <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list  *ngFor= "let p of places"  >\n        <ion-item-sliding  #item >\n           <ion-item (dblclick)="onPlaceDetails(p)" >\n          <!-- <ion-avatar item-start >\n              <img *ngIf="!p.photos==[]" [src]="p.photos[0]" alt="Photo d\'une place" > \n          </ion-avatar> -->\n          <ion-thumbnail item-start >\n              <img  *ngIf="!p.photos==[]" [src]="p.photos[0]" alt="Photo d\'une place" > \n          </ion-thumbnail>\n            <h2>{{p.title}}</h2>\n            <p> {{p.city}} {{p.country}} </p>\n            <h3>{{p.timeStamp|date:\'dd/MM/yyyy-HH:mm\'}}</h3>\n          </ion-item>\n          <ion-item-options side="left">\n              <button item-end ion-button color="danger" expandable (click)="deletPlace(p)">\n                  <ion-icon name="trash"></ion-icon>\n                  Delete\n              </button> \n          </ion-item-options>\n          <ion-item-options side="right">\n              <button item-end ion-button color="dark" expandable (click)="onPlaceDetails(p)">\n                  <ion-icon name="information-circle"></ion-icon>\n               details\n              </button>\n            <button item-end ion-button color="secondary" expandable (click)="editPlace(p)">\n                  <ion-icon name="create"></ion-icon>\n                 edit\n                </button> \n                <button item-end ion-button color="primary" expandable (click)="sharePlace(p)">\n                    <ion-icon name="mail-open"></ion-icon>\n                    Mail\n                  </button> \n            </ion-item-options>\n        </ion-item-sliding> \n    </ion-list>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/places/places.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_places_service__["a" /* PlacesService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailsPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPhotoPage = /** @class */ (function () {
    function DetailsPhotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.image = this.navParams.data.picture;
    }
    DetailsPhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPhotoPage');
    };
    DetailsPhotoPage.prototype.deletePicture = function () {
    };
    DetailsPhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details-photo',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/details-photo/details-photo.html"*/'\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>detailsPhoto</ion-title>\n    <ion-buttons end="">\n        <button ion-button="" icon-only (click)="deletePicture()" >\n         <ion-icon name="trash"></ion-icon>\n        </button> \n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <img [src]="image" class="rounded-top" >\n</ion-content>\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/details-photo/details-photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailsPhotoPage);
    return DetailsPhotoPage;
}());

//# sourceMappingURL=details-photo.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeteoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_meteo_service__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MeteoPage = /** @class */ (function () {
    function MeteoPage(navCtrl, navParams, meteoService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meteoService = meteoService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.searchQuery = null;
    }
    MeteoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeteoPage');
    };
    MeteoPage.prototype.onGetMeteo = function (dataForm) {
        var _this = this;
        var ville = this.searchQuery;
        // LoadingController
        var loading = this.loadingCtrl.create({
            content: "Chargement de la page ....."
        });
        loading.present();
        // en utilisant les services
        this.pageMeteo = this.meteoService.chercher(ville);
        this.pageMeteo.subscribe(function (data) {
            _this.pageMeteo = data;
            //alerte page not foun     
            console.log("Données Météo Alger!", _this.pageMeteo);
        }, function (err) {
            console.log("aucune donnée méteo !");
            var alert = _this.alertCtrl.create({
                title: "Oupsss",
                message: "Aucune donnée méteo!",
            });
            alert.present();
        });
        setTimeout(function () {
            loading.dismiss();
        }, 10);
    };
    MeteoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meteo',template:/*ion-inline-start:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/meteo/meteo.html"*/'<!--\n  Generated template for the MeteoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>meteo</ion-title>\n    <button ion-button="" menuToggle="">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="searchQuery" (change)="onGetMeteo()" autocorrect="off" \n    placeholder="Entrer le nom d\'une ville" ></ion-searchbar>\n  \n      <ion-list>\n          <ion-item *ngFor="let m of pageMeteo?.list">\n              <ion-avatar item-start="">\n                <img src="./assets/imgs/{{m.weather[0].main}}.png">\n              </ion-avatar>\n                  <p>Country: <strong>{{pageMeteo.city.country}}</strong></p>\n                  <p>Population: <strong>{{pageMeteo.city.population}}</strong></p>\n                  <p>Date: <strong>{{m.dt*1000|date:\'dd/MM-HH:mm\'}}</strong></p>\n                  <p>Température: <strong> {{m.main.temp-273.15}} °C</strong></p>\n                  <p>Pression atmosphérique: <strong> {{m.main.pressure}} hPa</strong></p>\n                  <p>Humidité: <strong> {{m.main.humidity}} %</strong></p>\n                  <p>Vitesse du vent: <strong> {{m.wind.speed}} km/h</strong></p>\n              </ion-item>\n      </ion-list> \n\n</ion-content>\n'/*ion-inline-end:"/media/ouramdane/C010BF3510BF3170/Users/Utilisateur/Documents/MesProjetsDev/PROJET_FINIS/TouristIonicApplication/src/pages/meteo/meteo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_meteo_service__["a" /* MeteoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MeteoPage);
    return MeteoPage;
}());

//# sourceMappingURL=meteo.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map