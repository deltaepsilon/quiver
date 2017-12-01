import './style';
import { Component } from 'preact';
import Router from 'preact-router';
import FirebaseAuthentication from '@quiver/firebase-authentication';

export default class Fogo extends Component {
  render() {
    return (
      <Router>
        <FirebaseAuthentication google path="/"/>
      </Router>
    );
  }
}
