import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EndorsementListPage } from './endorsement-list';

@NgModule({
  declarations: [
    EndorsementListPage,
  ],
  imports: [
    IonicPageModule.forChild(EndorsementListPage),
  ],
  exports: [
    EndorsementListPage
  ]
})
export class EndorsementListPageModule {}
