import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttributeAddPage } from './attribute-add';

@NgModule({
  declarations: [
    AttributeAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AttributeAddPage),
  ],
  exports: [
    AttributeAddPage
  ]
})
export class AttributeAddPageModule {}
