import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPhotoPage } from './details-photo';

@NgModule({
  declarations: [
    DetailsPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsPhotoPage),
  ],
})
export class DetailsPhotoPageModule {}
