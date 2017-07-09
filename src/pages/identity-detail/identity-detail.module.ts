import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentityDetailPage } from './identity-detail';

@NgModule({
  declarations: [
    IdentityDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(IdentityDetailPage),
  ],
  exports: [
    IdentityDetailPage
  ]
})
export class IdentityDetailPageModule {}
