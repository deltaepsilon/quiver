import { h, render } from 'preact';
import FirebaseAuthentication from './firebase-authentication';

window.renderFirebaseAuthentication = function renderFirebaseAuthentication(container, options) {
  const props = options.reduce((props, option) => ((props[option] = true), props), {});
  render(<FirebaseAuthentication {...props} />, container, container.lastChild);
};

export default FirebaseAuthentication;
