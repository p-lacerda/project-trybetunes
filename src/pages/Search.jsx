import React from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import CardMusic from '../components/CardMusic';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      artist: '',
      albums: '',
      loading: false,
      resultEnabled: false,
      pesquisaAtual: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchAlbums = this.searchAlbums.bind(this);
    this.functionTest = this.functionTest.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // albums.map((album) => (album.artistName.includes(artist) ? album.artistName : null));
  async searchAlbums() {
    const { artist } = this.state;
    this.setState({
      loading: true,
    });
    await searchAlbumsAPI(artist)
      .then(
        (result) => {
          this.setState({
            albums: result,
            loading: false,
            pesquisaAtual: artist,
            resultEnabled: true,
            artist: '',
          });
        },
      );
  }

  functionTest() {
    const { albums } = this.state;
    console.log(albums);
  }

  render() {
    const { artist, albums, loading, pesquisaAtual, resultEnabled } = this.state;
    const NUMBER_LENGTH = 2;
    const enabled = artist.length >= NUMBER_LENGTH;

    // if (resultEnabled) return (<p> Resultado de álbuns de: </p>);
    if (loading) return <Loading />;
    let resEnabled = '';
    let vazioEnabled = '';
    if (resultEnabled) resEnabled = <p>{`Resultado de álbuns de: ${pesquisaAtual}`}</p>;
    if (albums.length === 0
      && resultEnabled) vazioEnabled = <p>Nenhum álbum foi encontrado</p>;

    return (
      <div data-testid="page-search">
        <form>
          <input
            type="text"
            name="artist"
            data-testid="search-artist-input"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            onClick={ this.searchAlbums }
            disabled={ !enabled }
          >
            Pesquisar
          </button>
        </form>

        <section>
          { resEnabled }
          <div>
            { vazioEnabled }
            { albums && albums.map((album) => (<CardMusic
              key={ album.collectionId }
              artistName={ album.artistName }
              collectionName={ album.collectionName }
              collectionId={ album.collectionId }
              artworkUrl100={ album.artworkUrl100 }
            />))}
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
