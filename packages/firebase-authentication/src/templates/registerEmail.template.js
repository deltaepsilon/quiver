import { h } from 'preact';
import linkState from 'linkstate';
import Button from 'preact-material-components/Button';
import Textfield from 'preact-material-components/Textfield';

function validateConfirmation(password, confirmation) {
  return password == confirmation;
}

exports.RegisterEmailTemplate = ({ firebaseAuthentication, authService, changeView }) => state => {
  const { password, confirmation } = state;
  const disabled = !validateConfirmation(password, confirmation);

  return (
    <div>
      <Textfield
        label="Password"
        type="password"
        autofocus
        value={password}
        onInput={linkState(firebaseAuthentication, 'password')}
      />
      <Textfield
        label="Confirm Password"
        type="password"
        autofocus
        value={confirmation}
        onInput={linkState(firebaseAuthentication, 'confirmation')}
      />
      <div class="buttons">
        <Button type="previous" ripple onClick={() => changeView('input-password')}>
          Back
        </Button>
        <Button
          type="next"
          ripple
          raised
          onClick={() => authService.createUserWithEmailAndPassword(state)}
          disabled={disabled}
        >
          Register
        </Button>
      </div>
    </div>
  );
};
