import { h } from 'preact';
import linkState from 'linkstate';
import Button from 'preact-material-components/Button';
import Textfield from 'preact-material-components/Textfield';
import Select from 'preact-material-components/Select';

function validatePhone(number) {
  return !!number && number.length >= 5;
}

function InputPhoneTemplate({
  firebaseAuthentication,
  authService,
  changeView,
  setConfirm,
  setCallingCodeIndex,
}) {
  return payload => {
    const { callingCode, callingCodeIndex, phone, recaptchaId, sortedCountryCodes } = payload;
    const disabled = !validatePhone(phone);
    const selectItems = sortedCountryCodes.map(({ name, callingCode }) => {
      return (
        <option value={callingCode}>
          {callingCode} {name}
        </option>
      );
    });

    return (
      <div>
        <div class="phone-number">
          <div>
            <span>+</span>
            <Select
              hintText="Country Code"
              basic
              onChange={e => setCallingCodeIndex(e.target.selectedIndex)}
              selectedIndex={callingCodeIndex}
            >
              {selectItems}
            </Select>
          </div>
          <Textfield
            label="Phone"
            type="number"
            autofocus
            onInput={linkState(firebaseAuthentication, 'phone')}
            value={phone}
          />
        </div>
        <div class="buttons">
          <Button type="previous" ripple onClick={() => changeView('login-options')}>
            Back
          </Button>
          <Button
            id={recaptchaId}
            type="next"
            ripple
            raised
            onClick={() => authService.signInWithPhoneNumber({ setConfirm, ...payload })}
            disabled={disabled}
          >
            Send SMS
          </Button>
        </div>
      </div>
    );
  };
}

export { InputPhoneTemplate };
