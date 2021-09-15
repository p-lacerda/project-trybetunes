import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: true,
    };
  }

  async componentDidMount() {
    await getUser()
      .then(
        (result) => {
          this.setState({
            name: result.name,
            loading: false,
          });
        },
      );
  }

  render() {
    const { name, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <header data-testid="header-component">
        <h3 data-testid="header-user-name" value={ name }>
          {`${name}`}
        </h3>
      </header>
    );
  }
}

export default Header;
