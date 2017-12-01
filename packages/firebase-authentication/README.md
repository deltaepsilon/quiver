# Firebase Authentication (Web)

### Goals

* Implement all available Firebase Authentication login methods.
* Be easily customizable
* Provide an introduction to the Firebase Authentication SDK for JavaScript

### Tests and Demo

* Clone the repo: `git clone https://github.com/deltaepsilon/quiver.git`
* Navigate to this directory and install dependencies: `cd packages/firebase-authentication && yarn`
* Tests `yarn test`
* Serve demo `yarn start`
* Build `yarn build`

### Framework

Firebase Authentication is built on [Preact](https://preactjs.com/); however, I did my best to
separate the Preact from the vanilla ES2015 JavaScript.

Preact is mostly a JSX templating engine. There's not much to understand beyond the JSX. But if
you're not a fan of JSX, just pay attention to `services/auth.service.js`... it's vanilla ES2015
JavaScript and it encapsulates all of the Firebase-specific functionality.

# Why Firebase Authentication?

Have you ever implemented your own auth system? Yes? Then you know how challenging it can be. If
not... then take my word for it and use an off-the-shelf system. Firebase Authentication provides
the following auth methods:

* Email/password
* Phone
* oAuth 2
  * Google
  * Facebook
  * Twitter
  * Github
* Custom token generation

All of these methods use [JSON Web Tokens](https://jwt.io/), also known as JWTs. 

> JWT is pronounced the same as the English word "jot".

We'll cover JWTs later. Don't worry. They're relatively simple.

### Email/Password

Email/password auth is what most people are used to. You register an email address and a password
with Firebase and it keeps track of your 
