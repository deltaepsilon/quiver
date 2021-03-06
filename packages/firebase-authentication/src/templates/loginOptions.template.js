import { h } from 'preact';
import Button from 'preact-material-components/Button';

// SVGs
import emailSvg from '../assets/icons/email.svg';
import phoneSvg from '../assets/icons/call.svg';
import facebookSvg from 'SuperTinyIcons/images/svg/facebook.svg';
import githubSvg from 'SuperTinyIcons/images/svg/github.svg';
import googleSvg from 'SuperTinyIcons/images/svg/google.svg';
import twitterSvg from 'SuperTinyIcons/images/svg/twitter.svg';

const loginMethodsMap = {
  email: { text: 'Log In with Email', svg: emailSvg, view: 'input-email' },
  phone: { text: 'Log in by Phone', svg: phoneSvg, view: 'input-phone' },
  facebook: {
    text: 'Log in with Facebook',
    svg: facebookSvg,
  },
  github: {
    text: 'Log in with GitHub',
    svg: githubSvg,
  },
  google: {
    text: 'Log in with Google',
    svg: googleSvg,
  },
  twitter: {
    text: 'Log in with Twitter',
    svg: twitterSvg,
  },
};

function getLoginMethods(props) {
  return getPropsKeys(props).map(type => Object.assign({ type }, loginMethodsMap[type]));
}

function getPropsKeys(props) {
  // Jest returns props like { google: true, facebook: true, twitter: true, github: true, children: [] }
  // Chrome returns props like {0: "email", 1: "phone", 2: "google", 3: "facebook", 4: "twitter", 5: "github", children: []}
  // The .map makes sure to return a string, not a bool or a number-like string, which standardizes the Jest and Chrome props styles
  // This works because isNaN(true) -> false; isNaN("0") -> false; isNaN("blerg") -> true
  // The .filter would use Array.prototype.includes, but ie11 prefers the ~ hack with .indexOf
  return Object.keys(props)
    .map(x => (isNaN(x) ? x : props[x]))
    .filter(x => ~Object.keys(loginMethodsMap).indexOf(x));
}

function LoginOptionsTemplate({ authService, changeView }) {
  function selectLoginOption(type) {
    const { view } = loginMethodsMap[type];

    if (view) {
      changeView(view);
    } else {
      authService.signInWithRedirect(type);
    }
  }

  return props => {
    const loginMethods = getLoginMethods(props);
    return loginMethods.map(method => {
      return (
        <Button type={method.type} ripple raised onClick={() => selectLoginOption(method.type)}>
          <img src={method.svg} />
          <span>{method.text}</span>
        </Button>
      );
    });
  };
}

export { LoginOptionsTemplate };
