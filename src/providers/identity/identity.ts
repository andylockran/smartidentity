import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthProvider } from '../auth/auth';
import * as keythereum from 'keythereum';
import * as keypair from 'keypair';

/*
  Generated class for the IdentityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class IdentityProvider {

  identities: FirebaseListObservable<any[]>;
  uid: any;

  constructor(public afDB: AngularFireDatabase, public auth: AuthProvider) {
    this.auth.afAuth.authState.subscribe(authData => {
      let uid = authData.uid;
      this.uid = uid;
      console.log("Uid is:", this.uid);
    });
    this.identities = this.getIdentities();
  }

  getIdentities(): FirebaseListObservable<any> {
    let identities = this.afDB.list('/user/' + this.uid + '/identities');
    return identities;
  }

  getIdentity(identity: string): FirebaseObjectObservable<any> {
    let rootIdentity = this.afDB.object('/user/' + this.uid + '/identities/rootIdentity');
    return rootIdentity;
  }

  addRootIdentity() {
    let ethereumKeys = this.generateEthereumKeys();
    let encryptionKeys = this.generateRSAKeys();
    let signingKeys = this.generateRSAKeys();
    let identityData = {
      hash: "0xTestHash",
      ethereumKeys: ethereumKeys,
      encryptionKeys: encryptionKeys,
      signingKeys: signingKeys
    }
    this.updateIdentity('rootIdentity', identityData);
  }

  updateIdentity(identity: string, data: any) {
    let identities = this.getIdentities();
    console.log(this.uid);
    identities.update(identity, data).then(
      newIdentity => {
        console.log("Identity updated:", identity);
      },
      error => {
        console.log(error);
      });
  }

  generateEthereumKeys() {
    console.log("Generating ethereum keys.");
    let params = { keyBytes: 32, ivBytes: 16 };
    var dk = keythereum.create(params);
    return dk;
  }
  generateRSAKeys() {
    console.log("Generating rsa keys.");
    let keys = keypair({ bits: 1024 });
    return keys;
  }

}
