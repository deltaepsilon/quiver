import { h, Component } from 'preact';
import registerCustomElement from 'preact-custom-element';
import EmailAuth from './email-auth.jsx';

export default class FirebaseAuthentication extends Component {
  render(props) {
    const active = Object.keys(props)
      .filter(x => x != 'children')
      .reduce(
        (active, key) => Object.assign({ [key]: typeof props[key] != 'undefined' }, active),
        {}
      );

    return (
      <div class="firebase-authentication">
        <EmailAuth active={active.email} />
      </div>
    );
  }
}

registerCustomElement(FirebaseAuthentication, 'firebase-authentication');
