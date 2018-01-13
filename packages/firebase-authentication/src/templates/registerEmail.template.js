import { h } from 'preact';
import linkState from 'linkstate';
import Button from 'preact-material-components/Button';
import TextField from 'preact-material-components/TextField';

function validateConfirmation(password, confirmation) {
  return password == confirmation;
}

function RegisterEmailTemplate({ firebaseAuthentication, authService, changeView }) {
  return state => {
    const { password, confirmation } = state;
    const disabled = !validateConfirmation(password, confirmation);

    return (
      <div>
        <TextField
          label="Password"
          type="password"
          autofocus
          value={password}
          onInput={linkState(firebaseAuthentication, 'password')}
        />
        <TextField
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
}

export { RegisterEmailTemplate };
