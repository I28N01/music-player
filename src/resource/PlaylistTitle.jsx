import React from 'react';
import icon from '../img/icon/time.png';

function PlaylistTitle() {
    return (
        <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
            <div className="playlist-title__svg">
            <img src={icon} alt="playlist-title__svg" />
        </div>
        </div>
    </div>
    );
  }

  export default PlaylistTitle;