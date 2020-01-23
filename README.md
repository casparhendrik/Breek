# Breek

Breek is a mobile application made for teachers. They can create/join activities and link these to their personal agenda. 
In this picture you can see how it works.

![Application screens](/src/assets/Mockup_phone.png)

## Installation
- First of all, download NodeJS and npm: [NodeJS Download](https://nodejs.org/en/)
- Install Android SDK for Android platform and XCode for ios
- install cordova `$ sudo npm install -g cordova`
- install Ionic `$ sudo npm install -g ionic`

### Steps for each platform

Android:
```bash
ionic cordova run android
```

Ios:
```bash
ionic cordova run ios
```
After this step, open breek.xcodeproj with XCode and use 'Automatic provisioning' to sign and build the app.

Browser
```bash
ionic serve
```
