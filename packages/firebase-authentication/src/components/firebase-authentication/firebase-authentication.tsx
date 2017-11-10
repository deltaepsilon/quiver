import { Component, Prop } from '@stencil/core';

import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'firebase-authentication',
  styleUrl: 'firebase-authentication.scss',
  shadow: true,
})
export class FirebaseAuthentication {
  @Prop() email: boolean;

  @Prop() phone: boolean;

  @Prop() google: boolean;

  @Prop() facebook: boolean;

  @Prop() twitter: boolean;

  @Prop() github: boolean;

  @Prop() anonymous: boolean;

  get el() {
    return this['__el'];
  }

  get auth() {
    return window['firebase'].auth();
  }

  render() {
    const { email, phone, google, facebook, twitter, github, anonymous } = this;
    const props = { email, phone, google, facebook, twitter, github, anonymous };
    console.log(props);

    let buttons = '';

    if (email) {
      buttons += ''
    }

    return (
      <div>
        <button class="mdc-button mdc-button--raised mdc-ripple-upgraded">This is working</button>
      </div>
    );
  }

  componentDidUpdate() {
    console.log('component did update now sd', this);
  }

  componentDidLoad() {
    console.log(
      'component did load now sd',
      this.el.shadowRoot.querySelector('.mdc-ripple-upgraded')
    );
    this.upgrade();
  }

  upgrade() {
    const buttons = this.el.shadowRoot.querySelectorAll('.mdc-ripple-upgraded');

    buttons.forEach(button => {
      MDCRipple.attachTo(button);
    });
  }
}
