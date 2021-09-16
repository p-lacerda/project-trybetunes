import React from 'react';
import { Link } from 'react-router-dom';

class CardMusic extends React.Component {
  render() {
    const { collectionId, artworkUrl100, collectionName, artistName } = this.props;
    return (
      <div>
        <img src={ artworkUrl100 } alt={ collectionName } />
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <h3>{ collectionName }</h3>
        </Link>
        <h4>{ artistName }</h4>

      </div>
    );
  }
}

export default CardMusic;
