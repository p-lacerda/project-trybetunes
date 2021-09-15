import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      loading: false,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleLogin() {
    const { name } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({ name });
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  render() {
    const { name, loading, redirect } = this.state;
    const NUMBER_LENGTH = 3;
    const enabled = name.length >= NUMBER_LENGTH;

    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/search" />;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              value={ name }
              onChange={ this.handleChange }
              data-testid="login-name-input"
            />
            <button
              type="button"
              data-testid="login-submit-button"
              onClick={ this.handleLogin }
              disabled={ !enabled }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
