import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EndorsementDetailPage } from './endorsement-detail';

@NgModule({
  declarations: [
    EndorsementDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EndorsementDetailPage),
  ],
  exports: [
    EndorsementDetailPage
  ]
})
export class EndorsementDetailPageModule {}
