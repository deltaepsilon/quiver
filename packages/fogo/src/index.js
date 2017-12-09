import './style';
import { Component } from 'preact';
import Router from 'preact-router';
import { Provider } from 'unistore';
import { store } from './datastore';
import Match from 'preact-router/match';

// Quiver
import FirebaseAuthentication from '@quiver/firebase-authentication';

// Dependencies
import Nav from './components/nav/nav.component';
import Drawer from './components/drawer/drawer.component';
import Guard from './components/guard/guard.component';

// Preact Material Components
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';

export default class Fogo extends Component {
  get auth() {
    return window.firebase.auth();
  }

  componentWillMount() {
    this.registerOnAuthStateChanged();
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Match>{this.handlePath}</Match>
          <Guard />
          <Nav />
          <Drawer />
          <div class="full-height router-wrapper">
            <Router>
              <FirebaseAuthentication google path="/login" />
              <div path="/">Path: /</div>
              <div path="/play">Path: /play</div>
              <div default>404</div>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }

  registerOnAuthStateChanged() {
    this.auth.onAuthStateChanged(currentUser => {
      const { currentUser: laggedCurrentUser } = store.getState();
      store.setState({ laggedCurrentUser, currentUser });
    });
  }

  handlePath({ matches, path, url }) {
    const { path: laggedPath } = store.getState();
    store.setState({ laggedPath, path });
  }
}
