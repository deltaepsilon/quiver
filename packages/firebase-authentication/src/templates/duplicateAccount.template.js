import { h } from 'preact';
import Button from 'preact-material-components/Button';

exports.DuplicateAccountTemplate = ({ changeView }) => ({ email }) => {
  return (
    <div>
      <p>An account already exists for {email}.</p>
      <p>
        Multiple accounts for a single email have been disabled. Try logging in with a different
        authentication provider.
      </p>
      <div class="buttons">
        <Button type="previous" raised ripple autofocus onClick={() => changeView('login-options')}>
          Back
        </Button>
      </div>
    </div>
  );
};
