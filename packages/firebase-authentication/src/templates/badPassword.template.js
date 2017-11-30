import { h } from 'preact';
import Button from 'preact-material-components/Button';

exports.BadPasswordTemplate = ({ authService, changeView }) => state => {
  const {email} = state;

  return (
    <div>
      <p>The password for {email} does not match our records.</p>
      <p>
        If an account exists under a different authentication provider, you may be able to
        register a new email/password account.
      </p>
      <div class="buttons">
        <Button type="previous" ripple onClick={() => changeView('input-email')}>
          Back
        </Button>
        <Button ripple onClick={() => changeView('register-email')}>
          Register
        </Button>
        <Button
          type="next"
          raised
          ripple
          autofocus
          onClick={() => authService.sendPasswordResetEmail(state)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
