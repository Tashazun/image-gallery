import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbumItem extends PureComponent {
  
  static propTypes = {
    album: PropTypes.object,
  };

  render() {
    const { album } = this.props;
    
    return (
      <li>
        <div>
          <img src={album.coverImage}/>
          <Link to={`/albums/${album._id}`}>{album.title}</Link>
          <p>{album.description}</p>
        </div>
      </li>
    );
  }
}