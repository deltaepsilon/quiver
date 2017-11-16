import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'firebase-authentication',
  styleUrl: 'firebase-authentication.scss',
  shadow: true,
})
export class MDCButton {
  // Auth Methods
  @Prop() email: boolean;
  @Prop() phone: boolean;
  @Prop() google: boolean;
  @Prop() facebook: boolean;
  @Prop() twitter: boolean;
  @Prop() github: boolean;

  render() {
    return (
      <div id="firebase-authentication">
        {!!this.email && (
          <mdc-button class="email" raised>
            Email/Password
          </mdc-button>
        )}
        {!!this.phone && (
          <mdc-button class="phone" raised>
            Phone
          </mdc-button>
        )}
        {!!this.google && (
          <mdc-button class="google" raised>
            Google
          </mdc-button>
        )}
        {!!this.facebook && (
          <mdc-button class="facebook" raised>
            Facebook
          </mdc-button>
        )}
        {!!this.twitter && (
          <mdc-button class="twitter" raised>
            Twitter
          </mdc-button>
        )}
        {!!this.github && (
          <mdc-button class="github" raised>
            Github
          </mdc-button>
        )}
      </div>
    );
  }
}
