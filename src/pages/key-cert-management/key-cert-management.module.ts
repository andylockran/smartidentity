import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeyCertManagementPage } from './key-cert-management';

@NgModule({
  declarations: [
    KeyCertManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(KeyCertManagementPage),
  ],
  exports: [
    KeyCertManagementPage
  ]
})
export class KeyCertManagementPageModule {}
