import { h } from 'preact';
import Button from 'preact-material-components/Button';

exports.PromptRegisterTemplate = ({ changeView }) => ({ email }) => {
  return (
    <div>
      <p>Account not found for {email}.</p>
      <p>Would you like to register a new account?</p>
      <div class="buttons">
        <Button type="previous" ripple onClick={() => changeView('input-email')}>
          Back
        </Button>
        <Button type="next" raised ripple onClick={() => changeView('register-email')}>
          Register
        </Button>
      </div>
    </div>
  );
};
