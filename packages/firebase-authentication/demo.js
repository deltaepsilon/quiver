import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import FirebaseAuthentication from './src';

import { Component } from 'preact';
import './demo.css';

export default class App extends Component {
  render() {
    const loginMethods = ['email', 'phone', 'google', 'facebook', 'twitter', 'github'];
    const cards = loginMethods.map(method => {
      const props = [method];
      return (
        <Card z="1" padding>
          <Card.Primary>
            <Card.Title>
              <h2 style="text-transform: capitalize;">{method}</h2>
            </Card.Title>
            <FirebaseAuthentication {...props} />
          </Card.Primary>
        </Card>
      );
    });
    return <div class="demo">
      {cards}

      <Card z="1" padding>
          <Card.Primary>
            <Card.Title>
              <h2>Kitchen Sink</h2>
            </Card.Title>
            <FirebaseAuthentication {...loginMethods} />
          </Card.Primary>
        </Card>
      </div>;
  }
}
