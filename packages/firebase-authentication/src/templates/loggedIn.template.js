import { h } from 'preact';
import Button from 'preact-material-components/Button';

exports.LoggedInTemplate = ({ authService }) => state => {
  const { currentUser } = state;
  return [
    <img class="profile-img" src={currentUser.photoURL} />,
    <p>{currentUser.email}</p>,
    <Button className="center" ripple raised onClick={() => authService.signOut()}>
      Sign Out
    </Button>,
    <Button
      ripple
      raised
      onClick={() => authService.currentUserDelete(state)}
      className="center mdc-theme--secondary-bg"
    >
      Delete Account
    </Button>,
  ];
};
