import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Album from './pages/Album';
import NotFound from './pages/NotFound';

class Switchers extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/search" component={ Search } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="/album/:id" component={ Album } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Switchers;
