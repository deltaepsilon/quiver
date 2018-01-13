import { h } from 'preact';
import linkState from 'linkstate';
import Button from 'preact-material-components/Button';
import TextField from 'preact-material-components/TextField';

function validatePassword(password) {
  return password && password.length > 4;
}

function InputPasswordTemplate({ firebaseAuthentication, authService, changeView }) {
  return state => {
    const { password } = state;
    const disabled = !validatePassword(password);

    return (
      <div>
        <TextField
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
}

export { InputPasswordTemplate };
