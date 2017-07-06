import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "HomePage";
  tab2Root = "AttributeListPage";
  tab3Root = "KeyCertManagementPage";

  constructor() {

  }
}
