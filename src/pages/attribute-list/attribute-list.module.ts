import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttributeListPage } from './attribute-list';

@NgModule({
  declarations: [
    AttributeListPage,
  ],
  imports: [
    IonicPageModule.forChild(AttributeListPage),
  ],
  exports: [
    AttributeListPage
  ]
})
export class AttributeListPageModule {}
