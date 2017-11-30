import { h } from 'preact';
import linkState from 'linkstate';
import { validate } from 'email-validator';
import Button from 'preact-material-components/Button';
import Textfield from 'preact-material-components/Textfield';

exports.InputEmailTemplate = ({ firebaseAuthentication, changeView }) => ({ email }) => {
  const disabled = !validate(email);

  return (
    <div>
      <Textfield
        label="Email"
        type="email"
        autofocus
        onInput={linkState(firebaseAuthentication, 'email')}
        value={email}
      />
      <div class="buttons">
        <Button type="previous" ripple onClick={() => changeView('login-options')}>
          Back
        </Button>
        <Button
          type="next"
          ripple
          raised
          onClick={() => changeView('input-password')}
          disabled={disabled}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
