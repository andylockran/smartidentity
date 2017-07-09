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

  uid: any;
  identity: FirebaseObjectObservable<any[]>;

  constructor(public afDB: AngularFireDatabase, public auth: AuthProvider) {
    this.auth.afAuth.authState.subscribe(authData => {
      let uid = authData.uid;
      this.uid = uid;
      console.log("Uid is:", this.uid);
    });
    this.identity = this.getIdentity();
  }

  getIdentity(): FirebaseObjectObservable<any> {
    let rootIdentity = this.afDB.object('/user/' + this.uid + '/rootIdentity');
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
    let rootIdentity = this.afDB.object('/user/' + this.uid + '/rootIdentity');
    rootIdentity.update(identityData);
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
