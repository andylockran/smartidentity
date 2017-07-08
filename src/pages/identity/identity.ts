import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { IdentityProvider } from '../../providers/identity/identity';

/**
 * Generated class for the IdentityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-identity',
  templateUrl: 'identity.html',
})
export class IdentityPage {

  rootIdentity: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController, public idP: IdentityProvider) {

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    
    this.idP.getIdentity('rootIdentity').subscribe(data => {
      this.rootIdentity = data;
    });
  }

  addIdentity() {
    this.idP.addRootIdentity();
  }
  
  logout() {
    console.log("Logging out user");
    this.navCtrl.setRoot("LoginPage");
    this.auth.logoutUser();
  }

  log() {
    console.log(this.rootIdentity);
  }

}
