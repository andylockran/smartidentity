import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthProvider } from '../auth/auth';
/*
  Generated class for the AttributeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AttributeProvider {

  uid: any;
  attributes: FirebaseListObservable<any>;

  constructor(public afDB: AngularFireDatabase, public auth: AuthProvider) {
    //console.log('Hello AttributeProvider Provider');
    this.auth.afAuth.authState.subscribe(authData => {
      let uid = authData.uid;
      this.uid = uid;
    });
    this.attributes = this.getAttributes();
  }

  getAttributes(): FirebaseListObservable<any> {
    return this.attributes = this.afDB.list('/user/' + this.uid + '/rootIdentity/attributes');
  }

  addAttribute(data) {
    let attributes = this.getAttributes();
    attributes.push(data);
  }
}
