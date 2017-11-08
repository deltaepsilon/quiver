import { h, Component } from 'preact';

export default class EmailAuth extends Component {
  render({ active }) {
    return (
      active && (
        <form onSubmit={this.onSubmit}>
          <input
            class="auth-email"
            type="email"
            placeholder="email"
            onKeyUp={this.handleChange.bind(this)}
          />
          <input
            class="auth-password"
            type="password"
            placeholder="password"
            onKeyUp={this.handleChange.bind(this)}
          />
          <button type="submit" disabled={this.disabled}>
            Log In
          </button>
        </form>
      )
    );
  }

  onSubmit(e) {
    console.log('onSubmit', e);
    e.preventDefault();
  }

  handleChange({ target }) {
    this[target.type] = target.value;
    this.validate();
  }

  validate() {
    this.disabled = !(this.email && this.password);
    console.log('disabled', this.disabled);
  }
}
