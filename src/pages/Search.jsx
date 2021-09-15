import React from 'react';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { artistName } = this.state;
    const NUMBER_LENGTH = 2;
    const enabled = artistName.length >= NUMBER_LENGTH;
    return (
      <div data-testid="page-search">
        <form>
          <input
            type="text"
            name="artistName"
            data-testid="search-artist-input"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ !enabled }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
