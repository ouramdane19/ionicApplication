import { SharePlacePage } from './../pages/share-place/share-place';
import { EditPlacePage } from './../pages/edit-place/edit-place';
import { SearchPage } from './../pages/search/search';
import { TabsPage } from './../pages/tabs/tabs';
import { DetailsPhotoPage } from './../pages/details-photo/details-photo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MeteoPage} from "../pages/meteo/meteo";
import {GalleryPage} from "../pages/gallery/gallery";
import {PlacesPage} from "../pages/places/places";
import {HttpClientModule} from "@angular/common/http";
import { ApiProvider } from '../providers/api/api';
import {GalleryService} from "../services/gallery.service";
import {DetailImagePage} from "../pages/detail-image/detail-image";
import {MeteoService} from "../services/meteo.service";
import {PlacesService} from "../services/places.service";
import {NewPlacePage} from "../pages/new-place/new-place";
import {IonicStorageModule} from "@ionic/storage";
import {Geolocation} from "@ionic-native/geolocation";
import {DetailsPlacePage} from "../pages/details-place/details-place";
import { EmailComposer } from '@ionic-native/email-composer';
import { Camera } from '@ionic-native/camera';
import { LongPressModule } from 'ionic-long-press';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
@NgModule({
  declarations: [
    MyApp,SearchPage,EditPlacePage,SharePlacePage,
    HomePage,GalleryPage,MeteoPage,TabsPage,PlacesPage,DetailImagePage,NewPlacePage,DetailsPlacePage,DetailsPhotoPage
  ],
  imports: [
    BrowserModule,HttpClientModule,LongPressModule,
    IonicModule.forRoot(MyApp),IonicStorageModule.forRoot({
      name: '__PlacesData',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,SearchPage,EditPlacePage,SharePlacePage,
    HomePage,TabsPage,GalleryPage,MeteoPage,PlacesPage,DetailImagePage,NewPlacePage,DetailsPhotoPage,DetailsPlacePage
  ],
  providers: [
    StatusBar,GalleryService, MeteoService,PlacesService,
    SplashScreen,Geolocation,Camera, NativeGeocoder,EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
