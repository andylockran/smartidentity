import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttributeProvider } from '../../providers/attribute/attribute';


/**
 * Generated class for the AttributeListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-attribute-list',
  templateUrl: 'attribute-list.html',
})
export class AttributeListPage {

  attributes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public attrP: AttributeProvider) {
    this.attrP.getAttributes().subscribe( data => {
      this.attributes = data;
    });
  }

  ionViewDidEnter() {
    console.log(this.attributes);
  }

  addAttribute() {
    this.navCtrl.push("AttributeAddPage");
  }

  attributeDetails(attribute) {
    this.navCtrl.push("AttributeDetailPage", { attribute: attribute });
  }
}
