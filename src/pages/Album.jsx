import React from 'react';
import propTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import Header from '../components/Header';

// Requisito 8 feito com base em referência ao repositório de Leonardo Bermejo - Turma 14 A
//  https://github.com/tryber/sd-014-a-project-trybetunes/blob/leonardo-bermejo-project-trybetunes/src/pages/Album.jsx

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      name: '',
      album: '',
      loading: true,
      favorites: [],
    };

    this.addMusics = this.addMusics.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.favoriteSongs = this.favoriteSongs.bind(this);
  }

  componentDidMount() {
    this.addMusics();
    this.favoriteSongs();
  }

  async handleChange(checked, music) {
    this.setState({ loading: true });
    if (checked) addSong(music);
    else removeSong(music);
    const getFavorites = await getFavoriteSongs();
    this.setState({
      loading: false,
      favorites: getFavorites,
    });
  }

  async addMusics() {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    this.setState({
      songs: response,
      loading: false,
      name: response[0].artistName,
      album: response[0].collectionName,
    });
  }

  async favoriteSongs() {
    const favorites = await getFavoriteSongs();
    this.setState({ favorites });
  }

  render() {
    const { songs, loading, name, album, favorites } = this.state;
    const songsSlice = songs.slice(1);
    return (
      <div data-testid="page-album">
        <Header />
        {loading ? <Loading />
          : (
            <>
              <div>
                <h3 data-testid="artist-name">{name}</h3>
                <h3 data-testid="album-name">{album}</h3>
              </div>
              <section>
                {songsSlice.map((song) => (
                  <MusicCard
                    onChange={ this.handleChange }
                    key={ song.trackId }
                    music={ song }
                    favoritesCheck={ favorites.some(({
                      trackId }) => song.trackId === trackId) }
                  />))}
              </section>
            </>
          )}
      </div>
    );
  }
}

Album.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  }),
}.isRequired;

export default Album;
