<div align="center" style="margin-bottom:10px; margin:auto" >
  <img style="margin-bottom:10px; width:150px; height:150px alt="challenge-logo"
    src="src/assets/logo.png"
  />
</div>

<h2 align="center" style="margin:50px">
   Series List mobile app
</h2>

<div align="center">

  <img alt="language version" src="https://img.shields.io/badge/React Native-v_0.69.5-61dafb?logo=react">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Fred-Reis/seriesList">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Fred-Reis/seriesList">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/Fred-Reis/seriesList">

</div>

<hr/>

<br/>

<div align="center">

  <a href="#-about-this-project">About this project</a>&nbsp;&nbsp;
  <a href="#-mandatory-features">Mandatory Features</a>&nbsp;&nbsp;
  <a href="#-bonus-features">Bonus Features</a>&nbsp;&nbsp;
  <a href="#-demo">Demo</a>&nbsp;&nbsp;
  <a href="#-technologies-and-libraries">Technologies and Libraries</a>&nbsp;&nbsp;
  <a href="#-roadmap">Roadmap</a>&nbsp;&nbsp;
  <a href="#-running-the-project">Running the project</a>&nbsp;&nbsp;

</div>

<br/>

<h1 align="center">
  <img src="src/assets/screenshot.png"/>
</h1>

# 💡 About this project

This project was build as a technical test.
The proposal for this project was create a small mobile app to allow users listing TV series, using the API provided by the [TVMaze website](https://www.tvmaze.com). 

This project was built using [**React Native**](https://reactnative.dev/) and [**typescript**](https://www.typescriptlang.org/)

- [Link for the API](https://www.tvmaze.com/api)
- [Download the Android app clicking here and test yourself](https://github.com/Fred-Reis/seriesList/raw/main/android/app/build/outputs/apk/release/app-release.apk)

<br/>

# 🔥 Mandatory Features

- List all of the series contained in the API used by the paging scheme provided by the API.
- Allow users to search series by name
- The listing and search views must show at least the name and poster image of the
series.
- After clicking on a series, the application should show the details of the series, showing
the following information:
  - Name
  - Poster
  - Days and time during which the series airs
  - Genres
  - Summary
  - List of episodes separated by season
- After clicking on an episode, the application should show the episode’s information, including:
  - Name
  - Number
  - Season
  - Summary
  - Image, if there is one

<br/>

# 🎄 Bonus Features

- ✅ Allow the user to set a PIN number to secure the application and prevent unauthorized users.
- ✅ For supported phones, the user must be able to choose if they want to enable fingerprint authentication to avoid typing the PIN number while opening the app.
- ✅ Allow the user to save a series as a favorite.
- ✅ Allow the user to delete a series from the favorites list.
- ✅ Allow the user to browse their favorite series in alphabetical order, and click on one to
see its details.
- ✅ Create a people search by listing the name and image of the person.
- ✅ After clicking on a person, the application should show the details of that person, such
as:
-- Name
-- Image
-- Series they have participated in, with a link to the series details.

<br/>

## 👀 Demo

<h1 align="center">
  <img src="src/assets/dashboard.gif"/>
</h1>

<br/>

## 🛠 Technologies and Libraries

Some of technologies and libraries used at this project:

- [**Expo**](https://expo.dev/) ;
- [**typescript**](https://www.typescriptlang.org/);
- [**NativeBase**](https://nativebase.io/) => NativeBase is a component library to build universal design systems;
- [**Lottie**](https://github.com/lottie-react-native/lottie-react-native) => For the animations;
- [**Async Storage**](https://react-native-async-storage.github.io/async-storage/) => Data storage system for React Native.;
- [**expo-local-authentication**](https://docs.expo.dev/versions/latest/sdk/local-authentication) => To allow user to use FaceID and TouchID (iOS) or the Biometric Prompt (Android) to authenticate the user with a face or fingerprint scan.;

<br/>

<br/>

## 🗺 Roadmap

[ ] Replace `Async Storage` to [**Firebase**](https://firebase.google.com/products/firestore?gclsrc=ds&gclsrc=ds) => To improve the security and allow users to create an account and authenticate themselves on the app and store the date on a cloud Database;   
[ ] Create tests using [**Jest**](https://jestjs.io/)  
[ ] Improve performance  
[ ] Integrate the app with [**Bitrise**](https://www.bitrise.io/) => For CI/CD purposes;  

<br/>

## 🏁 Running the project

1 - To run at the first time the project will be necessary creating a folder

```bash
mkdir <folder-name>
```

2 - Now within the folder

```bash
cd <folder-name>
```

3 - Let's cloning the repository

```bash
git clone https://github.com/Fred-Reis/seriesList
```

4 - Execute the following command to create `node_modules` folder

```bash
yarn
```

5 - To install dependencies in IOS project using cocoa pods

```bash
$ cd ios

$ pod install
```

6 - Now, if you want to run this project on the emulator or device in development mode, run this command using your preferred platform.

```bash
$ npx react-native run-<your-preferred-platform>
```

<br/>


<h4 align="center">
😃  <strong>BE HAPPY!</strong>
</h4>

<h4 align="center">
  "Stay hungry stay foolish!"
</h4>

<br/>

<h3 align="center">
Author: <a alt="Fred-Reis" href="https://github.com/Fred-Reis">Frederico Reis</a>
</h3>

<p align="center">

  <a alt="Frederico Reis" href="https://www.linkedin.com/in/frederico-reis-dev/">
    <img src="https://img.shields.io/badge/LinkedIn-Frederico_Reis-0077B5?logo=linkedin"/></a>
  <a alt="Frederico Reis" href="https://github.com/Fred-Reis ">
  <img src="https://img.shields.io/badge/Fred_Reis-GitHub-000?logo=github"/></a>

</p>

Made with ♥️ 2022
