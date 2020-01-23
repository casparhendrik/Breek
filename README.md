# Breek

Breek is a mobile application made for teachers. They can create or join activities and link these to their personal agendas.
The application should, in this way, motivate teachers to take midday breaks. According to our research, taking lunch breaks reduces the chances of experiencing redundant and therefore dangerous amounts of stress.
The picture below shows an impression of what the app should look like.

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
