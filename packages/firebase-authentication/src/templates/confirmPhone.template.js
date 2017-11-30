import { h } from 'preact';
import linkState from 'linkstate';
import Button from 'preact-material-components/Button';
import Textfield from 'preact-material-components/Textfield';

function validateCode(number) {
  return !!number && number.length == 6;
}

exports.ConfirmPhoneTemplate = ({ firebaseAuthentication, changeView }) => ({ code, confirm }) => {
  const disabled = !validateCode(code);

  return (
    <div>
      <Textfield
        label="SMS Code"
        type="number"
        autofocus
        onInput={linkState(firebaseAuthentication, 'code')}
        value={code}
      />
      <div class="buttons">
        <Button type="previous" ripple onClick={() => changeView('input-phone')}>
          Back
        </Button>
        <Button type="next" ripple raised onClick={() => confirm(code)} disabled={disabled}>
          Confirm
        </Button>
      </div>
    </div>
  );
};
