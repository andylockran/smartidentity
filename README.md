# SmartIdentity

SmartIdentity extends the work hosted at [SmartID](https://github.com/smartidentity).

This demonstration uses the Ionic Framework v2 to help provide a simple use case of an identity application.

## Architecture

SmartIdentity utilises the following technology paradigms:  

* Public key cryptography
* Ethereum Blockchain (for immutable transaction history)
* PGP - for establishing and auditing a web of trust.

I anticipate the publication of a more detailed explanation of the platform once there is demand for it.

## Preparing for the first run

### Setup the Ionic CLI:

To install Ionic for your machine, you'll require nodejs.org installed.

```bash
$ sudo npm install -g ionic@latest cordova
$ cd smartidentity
```

### Firebase Config

To allow firebase to work, setup your app and save the config as `src\app\firebaseConfig.ts` as follows:

```javascript
export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
```

### Running the app

Ionic allows the app to be run as a PWA (Progressive Web App) - which is my preferred mode of operation.  However,
it's far more powerful and will also allow for the app to be compiled on top of the cordova tools.

If you want to try and run this on a phone.  Specify your platform like below:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

For further information, visit [www.ionicframework.com](https://www.ionicframework.com).