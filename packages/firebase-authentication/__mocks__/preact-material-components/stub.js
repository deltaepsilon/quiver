import { h, Component } from 'preact';
export default class Stub extends Component {
  render(props) {
    return (<div name={this.constructor.name} {...props}></div>)
  }
}