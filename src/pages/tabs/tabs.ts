import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "IdentityPage";
  tab2Root = "AttributeListPage";
  tab3Root = "KeyCertManagementPage";

  constructor() {

  }
}
