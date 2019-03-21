import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharePlacePage } from './share-place';

@NgModule({
  declarations: [
    SharePlacePage,
  ],
  imports: [
    IonicPageModule.forChild(SharePlacePage),
  ],
})
export class SharePlacePageModule {}
