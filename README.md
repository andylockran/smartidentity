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

### Security disclaimer

This app is very much a functional demonstration, and as such all decisions made have not (yet) been security vetted.

Your encryption keys should never be transmitted over a network, so lots more work will be done on decoupling this from firebase, and using encrypted LocalStorage on device for certain key management, or leveraging the inbuilt functionality of certain platforms.

If you want to help write up a white-paper on how best to do key-management for a non-geek audience, please spend lots of time researching before throwing your two cents in.  Securing this stuff the right way does not mean looking for shortcuts, and as a rule the npm modules that have been used in the development of this app are by no means security-vetted for this purpose.

Hopefully the codebase will develop to a point whereby I can start working on the solutions for some of these problems.  At the core I intend to follow to best practices of the OpenPGP community, and part of the protocol hardening will be the ability for each individual user to set their own encryption levels.  This has to be 'secure by default'.