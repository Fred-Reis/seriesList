<div align="center" style="margin-bottom:10px">
  <img alt="Care Recipient logo"
    src="src/assets/logo.png"
  />

</div>

<h2 align="center" style="margin:50px">
   Care Recipient desktop Dashboard
</h2>

<div align="center">

  <img alt="language version" src="https://img.shields.io/badge/Node-v_12.13.1-339933?logo=node.js">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Fred-Reis/birdie-test-frontend">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Fred-Reis/birdie-test-frontend">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/Fred-Reis/birdie-test-frontend">

</div>

<hr/>

<br/>

<div align="center">

  <a href="#-about-this-project">
    About this project
  </a>&nbsp;&nbsp;
  <a href="#-back-end-challenge">
    Front End challenge
  </a>&nbsp;&nbsp;
  <a href="-deploy">
    Deploy
  </a>&nbsp;&nbsp;
  <a href="-features">
    Features
  </a>&nbsp;&nbsp;
  <a href="#-demo">
   Demo
  </a>&nbsp;&nbsp;
  <a href="#-random-user">
   Random User
  </a>&nbsp;&nbsp;
  <a href="#-tests">
   Tests
  </a>&nbsp;&nbsp;
  <a href="#-technologies-and-libraries">
    Technologies and Libraries
  </a>&nbsp;&nbsp;
  <a href="#-roadmap">
   Roadmap
  </a>&nbsp;&nbsp;
  <a href="#-running-the-project">
    Running the project
  </a>&nbsp;&nbsp;
  <a href="#author-frederico-reis">
    Author
  </a>

</div>

<br/>

<h1 align="center">
  <img src="src/assets/screenshot.png"/>
</h1>

## 💡 About this project

This project was build as a technical test.
The proposal for this project was create a small web application to allow next of kins to look observations of older adults receiving care, called care recipients.
This project was built using [**ReactJS**](https://reactjs.org/) and [**typescript**](https://www.typescriptlang.org/)

- [Back-End Repository](https://github.com/Fred-Reis/birdie-test-backend)

- [Try Online Application](https://dazzling-neumann-0c94b8.netlify.app/)

<br/>

## 🖥 Front End Challenge

The challenge was Display the information to a family member of this care recipient
This could mean presenting it in the following forms:

- A table
- A graph
- A timeline

<br/>

## 🌐 Deploy

This Front end project is hosted at [Netlify](https://www.netlify.com/)  
which URL [https://dazzling-neumann-0c94b8.netlify.app/](https://dazzling-neumann-0c94b8.netlify.app/)

<br/>

## 🔥 Features

It's a simple Dashboard to show some valuable infos to nexts of kin from those care recipients, at first moment it was developed exclusive to be used at desktop screens. This project highlighted those infos by:

- Doughnut Chart => It shows all events amount by their types.
- Table list => It's a scroll list of all events showing their dates, type and caregiver (it's the person which did that care). Beyond shows you may access more details about the event clicking on each one. This table allow these following type of filters:
  - Sort by date recents / olders.
  - Filter by event type / caregiver id
- Timeline Graph => It's a Line bar to shows the events amount evolution day by day.
- Its was created two cards to show important infos as `most recurrent event type` and `alerts triggered` by recipient
  at that period.
- And was also created a profile info to show simple infos from care recipient

> heads up: these events are shown 100 by 100 events, to navigate between these pages, please use the top left buttons

<h1 align="center">
  <img src="src/assets/buttons.png"/>
</h1>

<br/>

## 👀 Demo

<h1 align="center">
  <img src="src/assets/dashboard.gif"/>
</h1>

## 🃏 Random User

At each reload on the app will be generated a new random user (just when reload whole app, doesn't between pagination). To generate this user was used this [Random user generator](https://randomuser.me/).

<h1 align="center">
  <img src="src/assets/usergenerate.gif"/>
</h1>

<br/>

## 🧪 Tests

Unit tests were implemented using [Jest](https://jestjs.io/)

To run these tests just executing the following command at project root:

```bash
yarn test
```

Details will be displayed at your console.

It's also possible to run the test with `--coverage` flag, It'll be generated a folder called `coverage` at the root of your project, into it there will be a folder called `Lcov-report`, looking for a file `index.html` open in your browser and get access further details of executed tests.

```bash
yarn test --coverage
```

<br/>

## 🛠 Technologies and Libraries

Some of technologies and libraries used at this project:

- [**typescript**](https://www.typescriptlang.org/);
- [**zustand**](https://github.com/pmndrs/zustand) => To manage the global state for data;
- [**axios**](https://axios-http.com/docs/intro);
- [**Styled Components**](https://styled-components.com/);
- [**React Content Loader**](https://github.com/danilowoz/react-content-loader) => To create Skeleton svg to be shown when reloading;
- [**react chartjs 2**](https://github.com/reactchartjs/react-chartjs-2);

<br/>

<br/>

## 🗺 Roadmap

[ ] Allow search by `care_recipient_id`  
[ ] Improvements at responsivities from charts an  
[ ] Mobile layout  
[ ] Allow pagination by month  
[ ] Filter by date

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
git clone https://github.com/Fred-Reis/birdie-test-frontend
```

4 - Execute the following command to create `node_modules` folder

```bash
yarn
```

5 - To start the application at development mode run the following command:

```bash
yarn start
```

<br/>

If you came right here it signs that everything has gone well 🙏🏼 and then you may already able to see the dashboard on your browser 😱 following the URL below:

`http://localhost:3000`

<br/>

<!-- <h4 align="center">
  🚧  Project README  🚀  under construction...  🚧
</h4>

<br/>

<h4 align="center">
How about taking a look at the
  <a href="https://github.com/Fred-Reis/birdie-test-backend">
   back end API project
  </a>
  for this application meanwhile 😉
</h4>

<br/>

<h4 align="center">
  Thanks for your patience!!🙏🏼
</h4> -->

<br/>

<h4 align="center">
😃  <strong>BE HAPPY!</strong>
</h4>

<h4 align="center">
  "Stay hungry stay foolish!"
</h4>

<br/>

---

<h3 align="center">
Author: <a alt="Fred-Reis" href="https://github.com/Fred-Reis">Frederico Reis</a>
</h3>

<p align="center">

  <a alt="Frederico Reis" href="https://www.linkedin.com/in/frederico-reis-dev/">
    <img src="https://img.shields.io/badge/LinkedIn-Frederico_Reis-0077B5?logo=linkedin"/></a>
  <a alt="Frederico Reis" href="https://github.com/Fred-Reis ">
  <img src="https://img.shields.io/badge/Fred_Reis-GitHub-000?logo=github"/></a>

</p>

Made with ♥️ 2021
