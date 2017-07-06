import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentityPage } from './identity';

@NgModule({
  declarations: [
    IdentityPage,
  ],
  imports: [
    IonicPageModule.forChild(IdentityPage),
  ],
  exports: [
    IdentityPage
  ]
})
export class IdentityPageModule {}
