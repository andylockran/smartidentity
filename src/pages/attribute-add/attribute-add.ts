import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttributeProvider } from '../../providers/attribute/attribute';

/**
 * Generated class for the AttributeAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-attribute-add',
  templateUrl: 'attribute-add.html',
})
export class AttributeAddPage {

  public attributeForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formBuilder: FormBuilder, public attrP: AttributeProvider) {
    this.attributeForm = formBuilder.group({
      title: [''],
      content: ['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttributeAddPage');
  }

  addAttribute() {
    let data = {
      title: this.attributeForm.value.title,
      content: this.attributeForm.value.content
    }
    this.attrP.addAttribute(data);
    this.navCtrl.pop();
  }
}
