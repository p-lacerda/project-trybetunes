import React from 'react';
import Header from '../components/Header';

class ProfileEditor extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>Profile Edit</p>
      </div>
    );
  }
}

export default ProfileEditor;
