# Finvet Dms

This project DMS provide sales solutions.

#### Current version : ^1.0.0

The plugins are in development state.

#### Minimum version support

| Android | iOS |
| :-----: | :-: |
|   23+   | 11+ |


## Prerequisites
| Tool     | Min Version |
| ----------  | :-----: | 
| [Node.js](https://nodejs.org)   |   ^12.0.0      |   
| [Watchman](https://facebook.github.io/watchman)    |   ^1.0.0   |        
| [Xcode](https://developer.apple.com/xcode) |   ^12.0.0    |  
| [Cocoapods](https://cocoapods.org) |   ^1.10.1   |  
| [JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)|   ^11.0.0   | 
| [Android Studio and Android SDK](https://developer.android.com/studio) |   ^1.0.0    |

## Base dependencies

| Tool     | Version | Version |
| ----------  | :-----: | :-----: | 
| [@apollo/client](https://www.npmjs.com/package/@apollo/client)   |   ^3.7.15      |   for networking  |    
| [react-native-config](https://www.npmjs.com/package/react-native-config) |   ^1.5.1    |   to manage envionments   |  
| [react-navigation](https://reactnavigation.org/) |   7.x   |    navigation library.   | 
| [recoil](https://recoiljs.org/) |   ^0.7.7   |    state management.   | 
| [react-hook-form](https://react-hook-form.com/) |   ^7.45.0   |    performant, flexible and extensible forms with easy-to-use validation.   | 
| [jest](https://facebook.github.io/jest/) |   ^29.5    |   for testing  |


## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `actions`: Config apollo graphql to get data from DB.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.ts`
      - `Screen.styles.ts`
      - `Screen.test.ts`
  - `state`: Folder to handle state for the store.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.ts`: Main component that starts your whole app.
  - `index.ts`: Entry point of your application as per React-Native standards.

## Splash screen customization

To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `yarn [platform]: [environment]`


DEV: `yarn ios` or `yarn android`

STG: `yarn ios:staging` or `yarn android:staging`

PROD: `yarn ios:prod` or `yarn android:prod`

Also, you can use npm following the same rule as before: `npm run ios:staging`

Modify the environment variables files in root folder (`.env.development`, `.env.production` and `.env.staging`)


#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu
  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.
- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu
  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

## Styleguide

For coding styling, we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).

# How to use it

The idea of this section is to explain how the template composition is the best and easiest to use when you try to use well-formed, architectures, especially using redux flow.

The template follows a simple and convenient exporting pattern. The folder index exposes the resources, allowing to import all from the same path.

With that in mind, we are going to look at each folder to explain how to use it.

## Components

Components are the basic blocks of a react native application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

Another using Typescript to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too.

### Static resources:

To keep an application scalable and organized, the global static resources that are used in the application have to be created in a specific file.

### We manage three main folders for that:

- Assets: Here you can store all the images and icons that you need through the app. You have as an example the icon ic_home.png, to respond with the different device screen densities just create inside the same folder the image and all the scaled versions that you need. RN only handles x1, x2 and x3 in this case, you have.

  - assets
    - ic_home
      - ic_home.png
      - ic_home@2x.png
      - ic_home@3x.png

- Localization: This folder contains all the locale objects that you need to create a multilingual application. Create a file for each locale, inside define an object then maintain the nesting sorted by the screen that contains the text that you need and the text you want to show. As the last step, remember to create a reference inside the Localization.js file and add it to LocalizedStrings.
- Theme: Here you can define all the styles that you use on different screens. To make easier the interaction of the application with device options for example you can create here assets as light and dark color palette

## Screens

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.

To keep the structure, extract the styles from the main file and place it in a {namefile.styles.js} do the same for the set of tests needed for each screen with the file {namefile.test.js}