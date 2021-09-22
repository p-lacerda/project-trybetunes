import React from 'react';
import propTypes from 'prop-types';

// Requisito 8 feito com base em referência ao repositório de Leonardo Bermejo - Turma 14 A
//  https://github.com/tryber/sd-014-a-project-trybetunes/blob/leonardo-bermejo-project-trybetunes/src/components/MusicCard.jsx

class MusicCard extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { onChange, music } = this.props;
    const { checked } = target;
    onChange(checked, music);
  }

  render() {
    const { music: { trackId, trackName, previewUrl }, favoritesCheck } = this.props;
    return (
      <div>
        <div>
          <h3>{trackName}</h3>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
        </div>
        <label
          htmlFor={ trackId }
          data-testid={ `checkbox-music-${trackId}` }
        >
          Favorita
          <input
            type="checkbox"
            name="favorites"
            onChange={ this.handleChange }
            checked={ favoritesCheck }
            id={ trackId }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: propTypes.shape({
    trackId: propTypes.number,
    trackName: propTypes.string,
    previewUrl: propTypes.string,
  }),
  favoritesCheck: propTypes.checked,
  onChange: propTypes.func,
}.isRequired;

export default MusicCard;
