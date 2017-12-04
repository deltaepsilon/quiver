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
