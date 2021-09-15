import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
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
        <Route path="/search">
          <Header />
          <Search />
        </Route>
        <Route path="/favorites">
          <Header />
          <Favorites />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
          <ProfileEdit />
        </Route>
        <Route path="/album/:id">
          <Header />
          <Album />
        </Route>
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Switchers;
