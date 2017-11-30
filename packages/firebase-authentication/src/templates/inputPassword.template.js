import { h } from 'preact';
import linkState from 'linkstate';
import Button from 'preact-material-components/Button';
import Textfield from 'preact-material-components/Textfield';

function validatePassword(password) {
  return password && password.length > 4;
}

exports.InputPasswordTemplate = ({ firebaseAuthentication, authService, changeView }) => state => {
  const { password } = state;
  const disabled = !validatePassword(password);

  return (
    <div>
      <Textfield
        label="Password"
        type="password"
        autofocus
        value={password}
        onInput={linkState(firebaseAuthentication, 'password')}
      />
      <div class="buttons">
        <Button type="previous" ripple onClick={() => changeView('input-email')}>
          Back
        </Button>
        <Button
          type="next"
          ripple
          raised
          onClick={() => authService.signInWithEmailAndPassword(state)}
          disabled={disabled}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
